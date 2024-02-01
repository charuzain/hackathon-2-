
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import MenuPage from './Pages/MenuPage/MenuPage';
import MenuDetailPage from './Pages/MenuDetailPage/MenuDetailPage';
import CartPage from './Pages/CartPage/CartPage';
import { CartProvider } from './CartContex.js'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
