import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import MenuPage from './Pages/MenuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
