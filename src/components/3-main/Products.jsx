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

      <Container
        sx={{
          marginBottom: "50px",
        }}
      >
        <div
          style={{
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
          <button
            style={{
              padding: "7px",
              fontSize: "17px",
              minWidth: "190px",
              marginTop: { xs: "25px" },
              color: "#fff",
              backgroundColor: "#000",
              padding: "7px",
              borderRadius: "5px",
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
                  padding: "7px",
                  fontSize: "17px",
                  minWidth: "190px",
                  marginTop: { xs: "25px" },
                  color: "#fff",
                  backgroundColor: "#000",
                  padding: "7px",
                  borderRadius: "5px",
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
