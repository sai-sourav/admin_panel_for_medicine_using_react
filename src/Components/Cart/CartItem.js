import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../Context/display-cart";
import ProductContext from "../../Context/display-products";

const CartItem = (props) => {
  const Cart = useContext(CartContext)
  const Productctx = useContext(ProductContext)
  const inc_quantity = (e) => {
    e.preventDefault();
    const newitem = {
      medname: props.medname,
      amount: props.amount,
      quantity: 1
    }
    Cart.updatecartitems(newitem);
    Productctx.updateProduct({
      medname: props.medname,
      quantity: -1
    })

  }

  const dec_quantity = (e) => {
    e.preventDefault();
    const newitem = {
      medname: props.medname,
      amount: props.amount,
      quantity: -1
    }
    Cart.updatecartitems(newitem);
    Productctx.updateProduct({
      medname: props.medname,
      quantity: 1
    })

  }
  return (
    <React.Fragment>
      <li className="popup-content" key={Math.random().toString()}>
        <div>
          <h3>{props.medname}</h3>
          <div className="amount_quantity">
            <p>$ {props.amount}</p>
            <input type="text" value={`X ${props.quantity}`} readOnly></input>
          </div>
        </div>
        <div className="modify_qauntity">
          <button onClick={inc_quantity} className="inc_or_dec">+</button>
          <button onClick={dec_quantity} className="inc_or_dec">-</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
