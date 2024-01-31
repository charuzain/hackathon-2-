const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.use(express.json());



router.get('/', (req, res) => {
  res.send('Menu route');
});

module.exports = router;
