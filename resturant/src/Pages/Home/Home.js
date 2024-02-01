import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
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
      <ul>
        {menu &&
          menu.map((item) => (
            <li>
        
              <img src={`http://localhost:8000${item.image}`} alt={item.name} />
            </li>
          ))}
      </ul>
        <Hero></Hero>
    </main>
  );
}

export default Home;
