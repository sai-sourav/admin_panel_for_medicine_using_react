import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./Context/display-cart";
import { ProductContextProvider } from "./Context/display-products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </CartContextProvider>
);
