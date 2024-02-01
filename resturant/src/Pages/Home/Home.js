<<<<<<< HEAD
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
=======

import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
// import { link } from '../../../../server/routes/menuRouter';
>>>>>>> 97ec40f7686a92cb700b51b29ad539519ae73b21
function Home() {
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
        <Hero />
      <ul>
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

export default Home;
