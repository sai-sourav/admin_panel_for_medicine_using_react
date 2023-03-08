import React from "react";
import ReactDOM from "react-dom" 
import CartContext from "../../Context/display-cart";
import { useContext } from "react";
import CartItemList from "./CartItemList";

import './Cart.css'

export default function Cart() {
  const CartPopup = (props) => {
    const cart = useContext(CartContext);

    function order(e) {
      e.preventDefault();
      console.log("ordered!!");
    }

    let totalamount = 0;
    let content = <h2 className="no-items">No items to show</h2>;
    if (cart.cartitems.length > 0) {
      content = <p></p>;
      totalamount = cart.cartitems
        .map((item) => {
          return item.price * item.quantity;
        })
        .reduce((acc, elem) => {
          return acc + elem;
        });
    }

    return (
      <div className="popup-overlay">
        <div className="popup">
          <header className="popup-Header">
            <h2>Cart</h2>
          </header>
          {!cart.cartitems.length > 0 && content}
          {cart.cartitems.length > 0 && <CartItemList />}
          <div className="popup-content_amount">
            <h2>Total Amount</h2>
            <h2>$ {parseFloat(totalamount).toFixed(2)}</h2>
          </div>
          <footer className="popup-action">
            <button
              onClick={(e) => {
                e.preventDefault();
                cart.updateshowcart();
              }}
            >
              Close
            </button>
            <button onClick={order}>Order</button>
          </footer>
        </div>
      </div>
    );
  };
  return ReactDOM.createPortal(
    <CartPopup />,
    document.getElementById("overlay-root")
  );
}
