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

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += (item.quantity * item.price)));
      return total.toFixed(2);
  };


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
                    <img src={item.image} alt="" />
                    <div className="item">
                      <h1 className="item-title">{item.title}</h1>

                      <p>{item.description.substring(0, 100)}</p>
                      <div className="price">
                        {item.quantity} x ${item.price}
                      </div>

                      <button
                        className="delete"
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
                    </div>
                    <div className="total">
                      <span>SUBTOTAL</span>
                      <span>$ {totalPrice()}</span>
                    </div>
                  </li>
                );
              })
            ) : (
              <h2>No Products In Your Cart</h2>
            )}
            {products.length > 0 && (
              <button
                className="reset"
                onClick={() => dispatch(clearAllFromCart())}
                style={{
                  marginTop: "20px",
                }}
              >
                <span
                  className="clearAll"
                  style={{
                    marginBottom: "20px",
                    marginRight: "20px",
                  }}
                >
                  Reset Cart
                </span>{" "}
                <ClearIcon />
              </button>
            )}
          </ul>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
