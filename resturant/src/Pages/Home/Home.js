
import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
// import { link } from '../../../../server/routes/menuRouter';
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
    </main>
  );
}

export default Home;
