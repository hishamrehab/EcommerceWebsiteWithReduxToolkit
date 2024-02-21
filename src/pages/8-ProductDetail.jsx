import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "../components/3-main/Product";
import { Box, Container, Stack } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { addToCart } from "../redux/cartReducer";
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
      <Stack
        sx={{
          position: "relative",
          marginTop: "50px",
        }}
      >
        <Card
          sx={{
            marginBottom: "40px",
            marginRight: "auto",
            marginLeft: "auto",

            height: "550px",
          }}
        >
          <Box>
            <img
              src={product.image}
              width="300px"
              height={"400px"}
              style={{
                position: "absolute",
                top: "50px",
                left: "0",
              }}
            />
          </Box>

          <CardContent
            sx={{
              marginLeft: "400px",
            }}
          >
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
              <span
                style={{
                  color: "#FFF",
                  backgroundColor: "#000",
                  fontSize: "12px",
                  padding: "10px",
                  marginLeft: "500px",
                  marginTop: "50px",
                  hover: {
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#FFF",
                    },
                  },
                }}
              >
                Add To Cart
              </span>
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
