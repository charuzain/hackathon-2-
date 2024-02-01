import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../../Components/MenuList/MenuList';
import Categories from '../../Components/Categories/Categories';

function Menu() {
  const [menu, setMenu] = useState([]);
const allCategories = ["all", "burgers","soups" , "drinks"];
  
  const url = 'http://localhost:8000';
  const getMenuData = async () => {
    const response = await axios.get(`${url}/menu`);
    console.log(response.data);
    setMenu(response.data);
  };
  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <main>
      <h1>Our Menu</h1>
      <Categories categories={allCategories} />

      {!menu && <h1>Loading...</h1>}
      <ul>
        {menu && menu.map((item) => <MenuList key={item.id} {...item} />)}
      </ul>
    </main>
  );
}

export default Menu