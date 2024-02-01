import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuDetailPage.scss';
import { useParams } from 'react-router-dom';

const MenuDetailPage = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/menu/${id}`);
        setItemDetails(response.data);
      } catch (error) {
        console.error(
          'There was an error while fetching item details from server:',
          error
        );
      }
    };

    fetchItemDetails();
  }, [id]);

  const { name, price, description, image, ingredients, vegetarian, category } =
    itemDetails;

  return (
    <>
      <div className="menu-detail-container">
        <div className="menu-detail-image">
          <img src={`http://localhost:8000${image}`} alt={name} />
        </div>
        <div className="menu-detail-info">
          <h2 className="menu-detail-info__name">{name}</h2>
          <p className="menu-detail-info__description">
            Description: {description}
          </p>
          <p className="menu-detail-info__price">Price: ${price}</p>
          <p className="menu-detail-info__category">Category: {category}</p>
          <p className="menu-detail-info__vegetarian">
            Vegetarian: {vegetarian ? 'Yes' : 'No'}
          </p>
          <p className="menu-detail-info__ingredients">Ingredients:</p>
          <ul className="menu-detail-info__ingredients-list">
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <li key={index} className="menu-detail-info__ingredient">
                  {ingredient}
                </li>
              ))}
          </ul>
          <p className="menu-detail-info__rating">Rating: 5 stars</p>
        </div>
      </div>
      <button className='detail__button'>Add To cart</button>
    </>
  );
};

export default MenuDetailPage;
