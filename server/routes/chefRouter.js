const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());
app.use('/images', express.static('../images'));

const getChefs = () => {
  const filePath = path.join(__dirname, '../data/chefs.json');
  const chefData = fs.readFileSync(filePath);
  const parsedchefData = JSON.parse(chefData);
  return parsedchefData
}


router.get('/', (req, res) => {
const parsedChefsData = getChefs();
const ChefsDataWithImages = parsedChefsData.map((chef, index) => ({
  ...chef,
  image: `/images/chefs/${(index +1 )}.png`,
}));
  console.log(ChefsDataWithImages);

  res.json(ChefsDataWithImages);
});

module.exports = router;
