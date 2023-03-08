import React, { useState } from "react";

const CartContext = React.createContext({
  showcart: false,
  cartitems: [],
  updatecartitems: (newitem) => {},
  updateshowcart: () => {}
});

export const CartContextProvider = (props) => {
  const [showcart, updateshowcart] = useState(false);
  const [cartitems, updateitems] = useState([]);

  const UpdateShowCart = () => {
    updateshowcart(!showcart);
  };

  const UpdateCartItems = (newitem) => {
    updateitems((prevState) => {
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

  const values = {
    showcart: showcart,
    cartitems: cartitems,
    updatecartitems: UpdateCartItems,
    updateshowcart: UpdateShowCart,
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
