import React, { useContext } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Addproduct from "./Components/ProductForm/Addproduct";
import ProductList from "./Components/ProductList/ProductList";
import CartContext from "../src/Context/display-cart";

function App() {
  const cart = useContext(CartContext);
  return (
    <React.Fragment>
      <React.Fragment>{cart.showcart && <Cart />}</React.Fragment>
      <React.Fragment>
        <Header />
        <Addproduct />
        <ProductList />
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
