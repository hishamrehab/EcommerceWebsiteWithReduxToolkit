import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";

function Products() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <hr />
      <Container
        sx={{
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            minWidth: "25px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
            marginLeft: { xs: "70px" },
            marginRight: { sm: "30px" },
          }}
        >
          <Button
            sx={{
              padding: "7px",
              fontSize: "15px",
              minWidth: "190px",
              marginTop: { xs: "25px" },
              backgroundColor: "#000",
              color: "#fff",
              hover: {
                backgroundColor: "#000",
                color: "#FFF",
                width:"100%"
              },
            }}
            onClick={() => {
              getProducts();
            }}
            variant="outlined"
          >
            <span
              style={{
                backgroundColor: "#000",
                color: "#fff",
                hover: {
                  backgroundColor: "#000",
                  color: "#FFF",
                  width: "100%",
                },
              }}
            >
              All
            </span>
          </Button>
          {categories.map((cat) => {
            return (
              <Button
                sx={{
                  padding: "10px",
                  fontSize: "15px",
                  minWidth: "190px",
                  marginTop: { xs: "25px" },
                }}
                key={cat}
                variant="outlined"
                onClick={() => {
                  getProductInCategory(cat);
                }}
              >
                {cat}
              </Button>
            );
          })}
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          {products.length > 0 ? (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {products.map((product) => (
                <Box
                  key={product.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    // gap: "10px",
                    justifyItems: "flex-start",
                    flexWrap: "wrap",
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
}

export default Products;
