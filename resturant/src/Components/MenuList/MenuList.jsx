import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContex';
import './MenuList.scss';

const MenuList = (props) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const existingCartItem = cartItems.find((item) => item.id === props.id);
    if (existingCartItem) {
      setQuantity(existingCartItem.quantity);
    } else {
      setQuantity(0); 
    }
  }, [cartItems, props.id]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const existingCartItem = cartItems.find((item) => item.id === props.id);
    console.log('Existing Cart Item:', existingCartItem);

     const newItem = {
       id: props.id,
       name: props.name,
       price: props.price,
       quantity: quantity,
       total: props.price * (quantity),
     };



    addToCart(newItem);
    console.log(`Added ${quantity} ${props.name} to cart`);
    navigate('/cart');
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className="item">
      <Link to={`/menu/${props.id}`} className="item-link">
        <img
          src={`http://localhost:8000${props.image}`}
          alt={props.name}
          className="item__image"
        />
        <div className="item__info">
          <header>
            <h3 className="item__name">{props.name}</h3>
            <span className="item__price">${props.price}</span>
          </header>
        </div>
      </Link>
      <div className="item__info">
        <p className="item__description">{props.description}</p>
        <div className="item__quantity-controls">
          <button className="item__quantity-button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="item__quantity-display">{quantity}</span>
          <button className="item__quantity-button" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <div className='item__cart'>
        <button className="item__add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        </div>
      </div>
    </li>
  );
};

export default MenuList;
