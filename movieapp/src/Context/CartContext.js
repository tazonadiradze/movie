import { createContext, useState } from "react";

export const CartContext = createContext({
 addCartItem: () => { }
});

const addCartItem = (currentCartItems, productToAdd) => {

 const existingCartItem = currentCartItems.find(

  (cartItem) => cartItem.id === productToAdd.id

 );

 if (existingCartItem) {
  return currentCartItems.map((cartItem) =>
   cartItem.id === productToAdd.id ? { ...cartItem } : cartItem
  );
 }

 return [...currentCartItems, { ...productToAdd }];
};



export const CartProvider = ({ children }) => {
 const [cartItems, setCartItem] = useState([]);

 const addItemToCart = (productToAdd) => {
  setCartItem([...cartItems, productToAdd]);
 };

 const value = {
  addItemToCart,
  cartItems

 };

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
