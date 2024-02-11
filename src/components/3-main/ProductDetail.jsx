import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";
import Box from "@mui/material/Box";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
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
    <Box>
      <Product product={product} showButton={false} />
    </Box>
  );
};

export default ProductDetail;
