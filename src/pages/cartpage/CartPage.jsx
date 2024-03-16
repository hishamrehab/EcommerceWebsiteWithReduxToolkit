import * as React from "react";
import "./CartPage.css";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deleteFromCart, clearAllFromCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";


export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };



  return (
    <>
      <div
        className="container "
        style={{
          marginBottom: "80px",
        }}
      >
        <div className="cart d-flex space-between ">
          <p className="cart-title">Products in your Cart</p>
        </div>
        <div className="container">
          <ul className="cart-list">
            {products.length ? (
              products.map((item) => {
                return (
                  <li className="cart-item" key={item.id}>
                    <div>
                      <img src={item.image} alt="" />
                    </div>

                    <div className="item">
                      <h1
                        className="item-title"
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        {item.title}
                      </h1>

                      <p>{item.description.substring(0, 80)}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "20px",
                        }}
                      >
                        <div
                          className="price"
                          style={{
                            fontWeight: "bold",
                            color: "hsl(353, 100%, 78%)",
                            fontSize: "20px",
                          }}
                        >
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
                    </div>
                  </li>
                );
              })
            ) : (
              <h2 className="cart-products">No Products In Your Cart</h2>
            )}
            {products.length > 0 && (
              <button
                className="reset"
                onClick={() => dispatch(clearAllFromCart())}
                style={{
                  backgroundColor: "hsl(353, 100%, 78%)",

                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <span
                  className="clearAll"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Reset Cart
                </span>{" "}
                <ClearIcon />
              </button>
            )}
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div
              className="total"
              style={{
                marginRight: "100px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "30px",
                }}
              >
                SUBTOTAL
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                $ {totalPrice()}
              </span>
            </div>

            {products.length > 0 && (
              <button
                style={{
                  backgroundColor: "#B5C0D0",
                  padding: "10px",
                  borderRadius: "5px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                PROCEED TO CHECKOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
