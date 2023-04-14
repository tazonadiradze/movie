import { createContext, useState } from "react";

export const CartContext = createContext({
 addItemToCart: () => { },
 deleteItemFromCart: () => { },
 cartItems: [],
});


export const CartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState([]);


 const deleteItemFromCart = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id))
 }

 const addItemToCart = (productToAdd) => {
  const existingCartItem = cartItems.find(
   (cartItem) => cartItem.id === productToAdd.id

  );
  if (existingCartItem) {
   return;
  }
  setCartItems([...cartItems, { ...productToAdd }]);
 };

 const value = {
  addItemToCart,
  cartItems,
  deleteItemFromCart
 };

 return (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
 );
};
