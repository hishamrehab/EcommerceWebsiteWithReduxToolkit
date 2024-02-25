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
import "./productDetails.css";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(2);
  const [quantity, setQuantity] = useState(1);

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
          margin: "auto",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: "350px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={product.image} />
          </Box>

          <CardContent>
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
              }}
            >
              ProductCategory : {product.category}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "17px",
                lineHeight: "25px",
                marginTop: "15px",
                marginBottom: "10px",
              }}
            >
              {product.description}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "hsl(353, 100%, 78%)",
                fontSize: "20px",
              }}
            >
              price : {product.price}$
            </Typography>

            <Button>
              {showButton && <Link to={`/product/${product.id}`}>Details</Link>}
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
