import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../../Components/MenuList/MenuList';
import Categories from '../../Components/Categories/Categories';
import './MenuPage.scss';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const allCategories = ['all', 'burgers', 'soups', 'drinks'];

  const url = 'http://localhost:8000';

  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    try {
      const response = await axios.get(`${url}/menu`);
      setMenu(response.data);
    } catch (error) {
      console.error('There was some error while fetching Menu data:', error);
    }
  };

  const filterItems = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const itemsPerPage = currentCategory === 'all' ? 12 : 9;

  const filteredMenu =
    currentCategory === 'all'
      ? [...menu]
      : menu.filter(
          (item) =>
            item.category.toLowerCase() === currentCategory.toLowerCase()
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <h1>Our Menu</h1>
      <Categories categories={allCategories} filterItems={filterItems} />

      {!menu && <h1>Loading...</h1>}
      <ul>
        {currentItems.map((item) => (
          <MenuList key={item.id} {...item} />
        ))}
      </ul>
      {filteredMenu.length > itemsPerPage && (
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(filteredMenu.length / itemsPerPage) },
            (_, i) => (
              <button key={i + 1} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            )
          )}
        </div>
      )}
    </main>
  );
}

export default Menu;
