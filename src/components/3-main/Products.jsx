import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Stack } from "@mui/material";

import { useTheme } from "@emotion/react";
import { Container } from "react-bootstrap";


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
      <Container
        // style={{
        //   marginBottom: "35px",
        //   paddingBottom: "25px",
        // }}
      >
        <h1
          component="div"
          style={{
            marginTop: "30px",
            marginButton: "25px",
            textAlign: "center",
            fontSize: "40px",
            gap:"30px"
          }}
        >
          Our Products
        </h1>
        <hr />
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
                <Box
                  key={product.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "15px",
                    justifyItems: "flex-start",
                  }}
                >
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
      </Container>
    </>
  );
};

export default Products;
