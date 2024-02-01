const express = require('express')
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());
router.use(express.json());
app.use('/images', express.static('../images'));

const getReviews = () => {
  const filePath = path.join(__dirname, '../data/reviews.json');
  const reviewsData = fs.readFileSync(filePath);
  const parsedreviewsData = JSON.parse(reviewsData);

  return parsedreviewsData;
};

router.get('/', (req, res) => {
  const parsedReviews = getReviews();
  const reviewsWithUserImages = parsedReviews.map((review, index) => ({
    ...review,
    image: `/images/reviewers/${index + 1}.jpg`,
  }));
console.log(reviewsWithUserImages)

  res.json(reviewsWithUserImages);
});

module.exports = router;