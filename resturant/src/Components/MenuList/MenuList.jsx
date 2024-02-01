import React from 'react'
import './MenuList.scss';
import { useNavigate } from 'react-router-dom';

const MenuList = (props) => {
  console.log(props)
  const navigate = useNavigate();
  
  const navigateToDetailPage = () => {
    navigate(`/menu/${props.id}`);
  }
  return (
    <li className="item" onClick={navigateToDetailPage}>
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
        <p className="item__description">{props.description}</p>
      </div>
    </li>
  );
}

export default MenuList