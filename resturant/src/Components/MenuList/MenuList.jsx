import React from 'react'
import './MenuList.scss';

const MenuList = (props) => {
  console.log(props)
  return (
    <li className='item'>
      <img src={`http://localhost:8000${props.image}`} alt={props.name} className='item__image' />
      <div className="item__info">
        <header>
          <h3 className='item__name'>{props.name}</h3>
          <span className="item__price">${props.price}</span>
        </header>
        <p className="item__description">{props.description}</p>
      </div>
    </li>
  );
}

export default MenuList