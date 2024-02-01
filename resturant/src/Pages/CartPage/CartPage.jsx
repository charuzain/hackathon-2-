
import React from 'react';
import { useCart } from '../../CartContex' 

const CartPage = () => {
  const { cartItems, setCartItems } = useCart();

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                You ordered {item.quantity} {item.name}
              </p>
              <p>${item.price}</p>
              <p>Total Price: ${item.total}</p>
              <button onClick={() => removeFromCart(item)}>
                Remove From Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
