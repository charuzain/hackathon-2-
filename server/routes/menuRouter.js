const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());
app.use('/images', express.static('../images'));
// app.use('/images', express.static(path.join(__dirname, '../images')));

const getMenu = () => {
  const filePath = path.join(__dirname, '../data/menu.json');
  const menuData = fs.readFileSync(filePath);
  const parsedMenuData = JSON.parse(menuData);

  return parsedMenuData;
};

router.get('/', (req, res) => {
  const parsedMenu = getMenu();
  console.log(parsedMenu)
  const menuWithImages = parsedMenu.map((dish, index) => ({
    ...dish,
    // image: `/images/${dish.category.toLowerCase()}/${dish.id}.jpg`,
    image: `/images/${dish.category.toLowerCase()}/${(index % 9) + 1}.jpg`,
  }));
  res.json(menuWithImages);
});

router.get('/:id', (req, res) => {
  const selectedId = parseInt(req.params.id);
  const parsedMenu = getMenu();
  const menuWithImages = parsedMenu.map((dish, index) => ({
    ...dish,
    image: `/images/${dish.category.toLowerCase()}/${(index % 9) + 1}.jpg`,
  }));
  const findMenuByid = menuWithImages.find((dish) => dish.id === selectedId);
  console.log(findMenuByid);
  res.json(findMenuByid);
});

module.exports = router;
