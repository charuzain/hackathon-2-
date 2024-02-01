import React from 'react'

const MenuList = (props) => {
  return (
    <li>
      <img src={`http://localhost:8000${props.image}`} alt={props.name} />
    </li>
  );
}

export default MenuList