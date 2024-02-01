import { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuDetailPage.scss';
import { useParams } from 'react-router-dom';


import React from 'react'

const MenuDetailPage = () => {
   const { id } = useParams();
  const [itemDetails, setItemDetails] = useState({});
   useEffect(() => {
     const fetchItemDetails = async () => {
       try {
         const response = await axios.get(`http://localhost:8000/menu/${id}`);
         setItemDetails(response.data);
       } catch (error) {
         console.error('There was an error while fetching item details from server:', error);
       }
     };

     fetchItemDetails();
   }, [id]);
  const { name, price, description, image } = itemDetails;
  return (
     <div>

      <p>Item ID: {id}</p>
      <p>Name: {name}</p>
  
  
     
    </div>
  );
}

export default MenuDetailPage
