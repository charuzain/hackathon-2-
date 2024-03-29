
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Foodies from '../../Components/Foodies/Foodies';
import Overview from '../../Components/Overview/Overview';
import Recipes from '../../Components/Recipes/Recipes';
import Collection from '../../Components/Collection/Collection';
import Chef from '../../Components/Chefs/Chef';
import Client from '../../Components/Clients/Client';
import Footer from '../../Components/Footer/Footer';
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
        <Recipes/>
        <Collection/>
        <Chef/>
        <Client/>
        <Footer/>
      
    </main>
  );
}

export default Home;
