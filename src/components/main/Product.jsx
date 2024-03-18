import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./ProductSection.css";
export const Product = ({ product, showButton }) => {
  const [value, setValue] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <Stack>
      <Card
        className="product-card"
        sx={{
          boxShadow: "10px 10px 2px 1px rgba(0, 0, 250,.1)",
          maxWidth: { md: "305px", sm: "100%", xs: "100%" },
          height: {
            md: "860px",
            sm: "920px",
            xs: "880px",
          },
          overflowX: "hidden",
          overflowY: "hidden",
          marginBottom: "50px",
          paddingBottom: "20px",
          border: "1px solid #777",
          marginRight: "auto",
          marginLeft:"15px"
          
        }}
      >
        <CardContent>
          <Box>
            <img src={product.image} width="100%" height={"300px"} />
          </Box>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            {product.title.slice(0, 40)}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "16px",
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
            {product.description.slice(0, 150)}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "15px",
              marginTop: "10px",
            }}
          >
            price : {product.price}$
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Rating
              sx={{
                paddingTop: "15px",
              }}
              name="simple-controlled"
              value={product.rating.rate}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              readOnly
            />
          </Typography>
          <Box
            sx={{
              marginTop: "15px",
              marginLeft: "50px",
              fontSize: "25px",
              display: "flex",
              gap: "25px",
              textAlign: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "60px",
                height: "35px",
                fontSize: "25px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>

            {quantity}
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "60px",
                height: "35px",
                fontSize: "25px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              +
            </button>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            paddingBottom: "30px",
            display: "flex",
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
                  quantity,
                })
              )
            }
          >
            <span
              style={{
                color: "#FFF",
                backgroundColor: "#000",
                fontSize: "12px",
                marginLeft: "20px",
                marginRight: "5px",
                padding: "10px",
                width: "120px",
                hover: {
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#FFF",
                  },
                },
              }}
            >
              Add TO Cart
            </span>
          </Button>

          {showButton && (
            <Link
              style={{
                textDecoration: "none",
                fontSize: "18px",
                // marginLeft: "30px",
              }}
              to={`/product/${product.id}`}
            >
              <button
                style={{
                  color: "#000",
                  backgroundColor: "#EBF400",
                  padding: "8px",
                  marginRight: "15px",
                  width: "80px",
                }}
                onClick={{
                  scrollY,
                }}
              >
                Details
              </button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Stack>
  );
};

export default Product;
