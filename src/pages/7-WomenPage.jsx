import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Container } from "react-bootstrap";
import Product from "../components/3-main/Product";

const WomenPage = () => {

  const dispatch = useDispatch();
  const showButton = true;
  const [products, setProducts] = useState([]);
  const apiUrl_Women =
    "https://fakestoreapi.com/products/category/women's%20clothing";

  useEffect(() => {
    fetch(apiUrl_Women).then((res) => {
      res.json().then((data) => {
        setProducts(data);
      });
    });
  }, []);

  return (
    <Container
      sx={{
        margin: "auto",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <h1
        component="div"
        style={{
          marginTop: "30px",
          marginButton: "25px",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        Women Products
      </h1>

      <Box sx={{ marginTop: "50px" }}>
        {products.length > 0 ? (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {products.map((product) => (
              <Stack key={product.id}>
                <Product product={product} showButton={true} />
              </Stack>
            ))}
          </Stack>
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </Container>
  );
};

export default WomenPage;
