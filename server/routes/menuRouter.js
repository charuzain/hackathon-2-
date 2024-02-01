const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());


app.use('/images', express.static('../images'));




const getMenu = () => {
  const filePath = path.join(__dirname, '../data/menu.json');
  const menuData = fs.readFileSync(filePath);
  const parsedMenuData = JSON.parse(menuData);

  return parsedMenuData;
};

router.get('/', (req, res) => {
  const parsedMenu = getMenu();
  const menuWithImages = parsedMenu.map((dish, index) => ({
    ...dish,
    image: `/images/${dish.category.toLowerCase()}/${
      (index % 9) + 1
    }.jpg`,
  }));
  console.log(menuWithImages[10])
  const menu = menuWithImages.map((dish) => ({
    id: dish.id,
    price: dish.price,
    image:dish.image
  }));

  res.json(menu);
});

module.exports = router;
