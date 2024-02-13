import * as React from "react";
import "./CartPage.css";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deleteFromCart, clearAllFromCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <>
      <div
        className="container "
        style={{
          marginBottom: "80px",
        }}
      >
        <div className="cart d-flex space-between ">
          <p className="cart-title">Cart</p>
        </div>
        <div className="container">
          <ul className="cart-list">
            {products.length ? (
              products.map((item) => {
                return (
                  <li className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt=""
                      width="100%"
                      height={"350px"}
                    />
                    <span className="cart-item-title">{item.title}</span>
                    <span className="cart-item-price">{item.price}$</span>
                    <button
                      className="cart-item-icon"
                      onClick={() =>
                        dispatch(
                          deleteFromCart({
                            id: item.id,
                          })
                        )
                      }
                    >
                      <FaTrash />
                    </button>
                  </li>
                );
              })
            ) : (
              <h2>No Products In Your Cart</h2>
            )}
            {products.length > 0 && (
              <button
                className="ClearAllButton"
                onClick={() => dispatch(clearAllFromCart())}
                style={{
                  marginTop: "20px",
                }}
              >
                <span
                  className="clearAll"
                  style={{
                    marginBottom: "20px",
                    marginRight:"20px"
                  }}
                >
                  clear all
                </span>{" "}
                <ClearIcon />
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
