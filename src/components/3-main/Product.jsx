import * as React from "react";
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

export const Product = ({ product, showButton }) => {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();


  return (
    <Container
      sx={{
        width: "290px",
      }}
    >
      <Stack>
        <Card
          sx={{
            boxShadow: "10px 10px 2px 1px rgba(0, 0, 250,.1)",
            marginBottom: "40px",
            width: "310px",
            height: "auto",
          }}
        >
          <CardContent>
            <Box>
              <img src={product.image} width="100%" height={"350px"} />
            </Box>

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
                color: "tomato",
              }}
            >
              price : {product.price}$
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <Rating
                sx={{
                  marginTop: "10px",
                }}
                name="simple-controlled"
                value={product.rating.rate}
                onChange={(event, newValue) => {
                  setValue(value);
                }}
                readOnly
              />
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              sx={{
                marginBottom: "20px",
              }}
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
                    // rating: product.rating.rate,
                  })
                )
              }
            >
              Add TO Cart
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Product;
