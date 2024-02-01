const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());


app.use('/images', express.static('./images'));




const getMenu = () => {
  const filePath = path.join(__dirname, '../data/menu.json');
  const menuData = fs.readFileSync(filePath);
  const parsedMenuData = JSON.parse(menuData);

  return parsedMenuData;
};

router.get('/', (req, res) => {
  const parsedMenu = getMenu();
  const menu = parsedMenu.map((dish) => ({
    id: dish.id,
    price: dish.price
    
  }));

  res.json(menu);
});

module.exports = router;
