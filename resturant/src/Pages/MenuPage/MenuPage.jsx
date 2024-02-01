import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../../Components/MenuList/MenuList';
import Categories from '../../Components/Categories/Categories';
import './MenuPage.scss';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [sortBy, setSortBy] = useState('none'); 
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

  const sortItems = (order) => {
    setSortBy(order);
    setCurrentPage(1);
  };

  const filterItems = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const itemsPerPage = currentCategory === 'all' ? 12 : 9;

  const filteredMenu = menu
    .filter((item) => {
      const itemNameMatch = item.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const ingredientMatch = item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchInput.toLowerCase())
      );

      return itemNameMatch || ingredientMatch;
    })
    .filter((item) =>
      currentCategory === 'all'
        ? true
        : item.category.toLowerCase() === currentCategory.toLowerCase()
    )
    .sort((a, b) => {
      if (sortBy === 'asc') {
        return a.price - b.price;
      } else if (sortBy === 'desc') {
        return b.price - a.price;
      }
      return 0; 
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <h1>Our Menu</h1>
      <div className="search-sort-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or ingredient..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="sort-container">
          <label>
            Sort by Price:
            <select value={sortBy} onChange={(e) => sortItems(e.target.value)}>
              <option value="none">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>
      <Categories categories={allCategories} filterItems={filterItems} />

      {filteredMenu.length === 0 && searchInput.trim() !== '' && (
        <p>No dishes found with name or ingredient: "{searchInput}"</p>
      )}

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
