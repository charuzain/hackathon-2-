import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../../Components/MenuList/MenuList';

function Menu() {
  const [menu, setMenu] = useState([]);
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

      {!menu && <h1>Loading...</h1>}
      <ul>
        {menu &&
          menu.map((item) => (
            <MenuList key={item.id} {...item} />
            // <li key={ item.id}>
            //   <img src={`http://localhost:8000${item.image}`} alt={item.name} />
            // </li>
          ))}
      </ul>
    </main>
  );
}

export default Menu