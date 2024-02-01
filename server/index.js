const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 8000
const menuRouter = require('./routes/menuRouter')
const reviewsRouter = require('./routes/reviewsRouter')
const chefRouter = require('./routes/chefRouter')

// app.use('/images', express.static('images'));

app.use(cors());
app.use(express.json());



app.use('/menu', menuRouter)
app.use('/chef', chefRouter);
app.use('/reviews', reviewsRouter);

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}")
})