import React, { useContext } from "react";
import "./ProductItem.css";
import ProductContext from "../../Context/display-products";
import CartContext from "../../Context/display-cart";
export default function ProductItem(props) {
  const Productctx = useContext(ProductContext)
  const Cartctx = useContext(CartContext)
  const addtobill = () => {
    console.log("click")
    Productctx.updateProduct({
      medname : props.rowdata.medname,
      quantity : -1
    })
    Cartctx.updatecartitems({
      medname : props.rowdata.medname,
      desc : props.rowdata.desc,
      price : props.rowdata.price,
      quantity : 1
    })
  }
  let quantity = props.rowdata.quantity
  let isDisabled = false
  if (quantity <= 0){
    quantity = "Out of Stock"
    isDisabled = true
  }


  return (
    <tr>
      <td>{props.rowdata.medname}</td>
      <td>{props.rowdata.desc}</td>
      <td>{props.rowdata.price}</td>
      <td>{quantity}</td>
      <div className="Addtobill_div"><button onClick={addtobill} className="Addtobill_button" disabled={isDisabled}>Add Item to bill</button></div>
    </tr>
  );
}
