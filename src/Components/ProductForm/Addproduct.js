import React, { useContext } from "react";
import "./Addproduct.css";
import ProductContext from "../../Context/display-products";

export default function Addproduct() {
  const productctx = useContext(ProductContext);

  const addtoProduct = (e) => {
    e.preventDefault();
    const desc = e.target.desc.value;
    const medname = e.target.medname.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const product = {
      medname : medname,
      desc : desc,
      price : parseInt(price),
      quantity : parseInt(quantity)
    }

    productctx.updateProducts(product)
    e.target.desc.value = ""
    e.target.medname.value = ""
    e.target.price.value = ""
    e.target.quantity.value = ""
    
  };
  return (
    <form onSubmit={addtoProduct} className="form">
      <div className="input_ele">
        <label htmlFor="medname">Medicine Name:</label>
        <input id="medname" type="text"></input>
      </div>
      <div className="input_ele">
        <label htmlFor="desc">Description:</label>
        <input id="desc" type="text"></input>
      </div>
      <div className="input_ele">
        <label htmlFor="price">Price:</label>
        <input id="price" type="text"></input>
      </div>
      <div className="input_ele">
        <label htmlFor="quantity">Quantity:</label>
        <input id="quantity" type="text"></input>
      </div>
      <button className="AddProduct_button" type="submit">Add product</button>
    </form>
  );
}
