import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { useTheme } from "@emotion/react";

const Products = () => {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(api_url).then((res) => {
      res.json().then((data) => {
        setProducts(data);
      });
    });
  }, []);
  return (
    <>
      <h1
        component="div"
        style={{
          marginTop: "30px",
          marginButton: "25px",
          textAlign: "center",
              fontSize:"50px"
        }}
      >
        Our Products
      </h1>

      <Box sx={{ marginTop: "50px" }}>
        {products.length > 0 ? (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <Box key={product.id}>
                <>
                  <Product product={product} showButton={true} />
                </>
              </Box>
            ))}
          </Stack>
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </>
  );
};

export default Products;
