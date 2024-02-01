import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems((prevItems) => [...prevItems, item]);
  // };
 const addToCart = (item) => {
   const existingItemIndex = cartItems.findIndex(
     (cartItem) => cartItem.id === item.id
   );

   if (existingItemIndex !== -1) {
     const updatedCart = [...cartItems];
     updatedCart[existingItemIndex] = {
       ...updatedCart[existingItemIndex],
       quantity: updatedCart[existingItemIndex].quantity + item.quantity,
     };
     setCartItems(updatedCart);
   } else {
     setCartItems((prevItems) => [...prevItems, item]);
   }
 };
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
