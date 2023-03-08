import React, { useState } from "react";

const ProductContext = React.createContext({
  products: [],
  updateProducts: (newitem) => {},
  updateProduct: (medname) => {}
});

export const ProductContextProvider = (props) => {
  const [products, updateProducts] = useState([]);

  const addProduct = (newitem) => {
    updateProducts((prevState) => {
      const find = prevState.findIndex((item) => {
        return item.medname === newitem.medname;
      });
      if (find >= 0) {
        prevState[find].quantity += +newitem.quantity;
        if (prevState[find].quantity < 1){
          prevState.splice(find,1);
        }
        return [...prevState];
      } else {
        return [...prevState, newitem];
      }
    });
  };

  const updateProduct = (product) => {
    updateProducts((prevState) => {
        const find = prevState.findIndex((item) => {
          return item.medname === product.medname;
        });
        prevState[find].quantity += product.quantity;
        return [...prevState]
      });
  }

  const values = {
    products: products,
    updateProducts: addProduct,
    updateProduct : updateProduct
  };

  return (
    <ProductContext.Provider value={values}>{props.children}</ProductContext.Provider>
  );
};

export default ProductContext;
