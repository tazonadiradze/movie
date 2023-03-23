import { createContext, useState } from "react";

export const CartContext = createContext({
 addItemToCart: () => { },
 cartItems: [],
});

export const CartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState([]);

 const addItemToCart = (productToAdd) => {
  const existingCartItem = cartItems.find(
   (cartItem) => cartItem.id === productToAdd.id

  );
  if (existingCartItem) {
   // If the product already exists in the cart, don't add it again
   return;
  }
  setCartItems([...cartItems, { ...productToAdd }]);
 };

 const value = {
  addItemToCart,
  cartItems,
 };

 return (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
 );
};
