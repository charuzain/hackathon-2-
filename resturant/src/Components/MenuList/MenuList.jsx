import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuList.scss';

const MenuList = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (e) => {
 
    e.stopPropagation();
    console.log(`Added ${quantity} ${props.name} to cart`);
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
        <div className="quantity-controls">
          <button className="quantity-button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-button" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default MenuList;
