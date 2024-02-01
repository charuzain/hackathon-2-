import React from 'react'

const MenuList = (props) => {
  console.log(props)
  return (
    <li>
      <img src={`http://localhost:8000${props.image}`} alt={props.name} />
      <div className="item-info">
        <header>
          <h5>{props.title}</h5>
          <span className="item-price">${props.price}</span>
        </header>
        <p className="item-text">{props.description}</p>
      </div>
    </li>
  );
}

export default MenuList