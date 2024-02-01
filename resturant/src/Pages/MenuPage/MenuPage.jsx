import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

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
      <ul>
        {!menu && <h1>Loading...</h1>}
        {menu &&
          menu.map((item) => (
            <li>
              <img src={`http://localhost:8000${item.image}`} alt={item.name} />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Menu