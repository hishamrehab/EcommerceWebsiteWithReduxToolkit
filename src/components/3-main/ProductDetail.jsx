import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";
import { Box, Container, Stack } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(2);
  const dispatch = useDispatch();
  const showButton = false;
  const api_url = "https://fakestoreapi.com/products";

  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  return (
    <Container>
      <Stack>
        <Card
          sx={{
            boxShadow: "10px 10px 2px 1px rgba(0, 0, 250,.1)",
            marginBottom: "40px",
            width: "90%",
            height: "auto",
          }}
        >
          <CardContent>
            <Box marginLeft={"20%"} marginTop={"25px"}>
              <img src={product.image} width="100%" height={"350px"} />
            </Box>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              {product.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "20px",
                color: "#779",
              }}
            >
              ProductCategory : {product.category}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "15px",
                lineHeight: "25px",
                marginTop: "15px",
              }}
            >
              {product.description}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "20px",
                marginTop: "10px",
                color: "tomato",
              }}
            >
              price : {product.price}$
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              marginBottom: "10px",
              alignItems: "baseline",
            }}
          >
            <Button
              size="small"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    rating: product.rating.rate,
                  })
                )
              }
            >
              Add TO Cart
            </Button>
            <Button>
              {showButton && <Link to={`/product/${product.id}`}>Details</Link>}
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
