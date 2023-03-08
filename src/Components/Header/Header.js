import React, { useContext } from "react";
import CartContext from "../../Context/display-cart";

import "./Header.css";

export default function Header() {
  const Cart = useContext(CartContext);
  const showCart = () => {
    console.log("clicked")
    Cart.updateshowcart((prev) => {return !prev})
  }
  return (
    <div className="Header">
      <h2>Admin Panel</h2>
      <button onClick={showCart} className="Cart_button">Cart</button>
    </div>
  );
}
