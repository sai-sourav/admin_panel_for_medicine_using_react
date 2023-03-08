import React, { useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css"
import productContext from "../../Context/display-products"

export default function ProductList() {
  const Productctx = useContext(productContext);
  const columns = [
    { key: "medname", label: "Medicine Name" },
    { key: "desc", label: "Description" },
    { key: "price", label: "Price" },
    { key: "quantity", label: "Quantity" }
  ];

  return (
    <div className="ProductList_div">
      {Productctx.products.length === 0 && <h2 className="noProducts">Please add Products</h2>}
      {Productctx.products.length > 0 &&
        <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.key}>{column.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Productctx.products.map((item) => {
            return <ProductItem rowdata={item} />;
          })} 
        </tbody>
      </table>}
    </div>
  );
}
