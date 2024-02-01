
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Foodies from '../../Components/Foodies/Foodies';
import Overview from '../../Components/Overview/Overview';
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
        <Foodies/>
        <Overview/>
   
    </main>
  );
}

export default Home;
