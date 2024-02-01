import React from 'react';
import { useCart } from '../../CartContex'
import { Link } from 'react-router-dom';

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
        <>
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
          <p>
            Total Order Price: $
            {cartItems.reduce((total, item) => total + item.total, 0)}
          </p>
          <Link to="/menu">
            <button>Add More Items</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;


// const CartPage = () => {
//   const { cartItems, setCartItems } = useCart();

//   const removeFromCart = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 <p>
//                   You ordered {item.quantity} {item.name}
//                 </p>
//                 <p>${item.price}</p>
//                 <p>Total Price: ${item.total}</p>
//                 <button onClick={() => removeFromCart(item)}>
//                   Remove From Cart
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <p>Total Order Price: ${cartItems.reduce((total, item) => total + item.total, 0)}</p>
//           <Link to="/menu">
//             <button>Add More Items</button>
//           </Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
