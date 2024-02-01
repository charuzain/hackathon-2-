import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../../Components/MenuList/MenuList';
import Categories from '../../Components/Categories/Categories';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const allCategories = ['all', 'burgers', 'soups', 'drinks'];

  const url = 'http://localhost:8000';

  const getMenuData = async () => {
    try {
      const response = await axios.get(`${url}/menu`);
      setMenu(response.data);
    } catch (error) {
      console.error('There was some error while fetching Menu data:', error);
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const filterItems = (category) => {
    setCurrentCategory(category);
  };

  const filteredMenu =
    currentCategory === 'all'
      ? [...menu] 
      : menu.filter(
          (item) =>
            item.category.toLowerCase() === currentCategory.toLowerCase()
        );

  return (
    <main>
      <h1>Our Menu</h1>
      <Categories categories={allCategories} filterItems={filterItems} />

      {!menu && <h1>Loading...</h1>}
      <ul>
        {filteredMenu.map((item) => (
          <MenuList key={item.id} {...item} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
