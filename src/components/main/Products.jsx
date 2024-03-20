import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import "./ProductSection.css";

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
    <Container>
      <h2
        className="text-center p-2"
        style={{
          width: "250px",
          margin: "auto",
        }}
      >
        <span
          style={{
            marginBottom: "20px",
          }}
        >
          Our Products
        </span>
      </h2>

      <Container
        sx={{
          marginBottom: "50px",
        }}
      >
        <div
          className="products-btns"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <button
            className="all-btn"
            style={{
              padding: "7px",
              fontSize: "17px",
              width: "200px",
              color: "#fff",
              backgroundColor: "hsl(353, 100%, 78%)",
              borderRadius: "5px",
              marginTop: {
                sm: "20px",
                xs: "20px",
              },
              textTransform: "uppercase",
            }}
            onClick={() => {
              getProducts();
            }}
            variant="outlined"
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                style={{
                  fontSize: "17px",
                  width:"200px",
                  color: "#fff",
                  backgroundColor: "hsl(353, 100%, 78%)",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "50px",
                  marginTop: "20px",
                  textAlign: "center",
                  padding: "7px",
                  paddingLeft: "50px",
                  textTransform: "capitalize",
                }}
                key={cat}
                variant="outlined"
                onClick={() => {
                  getProductInCategory(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <Box sx={{ marginTop: "50px" }}>
          {products.length > 0 ? (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "20px",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                overflowX: "hidden",
                overflowY: "hidden",
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
      </Container>
    </Container>
  );
}

export default Products;
