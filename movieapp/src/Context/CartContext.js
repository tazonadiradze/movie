import { createContext, useState } from "react";

export const CartContext = createContext({
 addItemToCart: () => { },
 deleteItemFromCart: () => { },
 cartItems: [],
});



export const CartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState(() => {
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  return savedCartItems || [];
 });



 const deleteItemFromCart = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id))
 }

 const addItemToCart = (productToAdd) => {
  alert('added to favorites')
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
