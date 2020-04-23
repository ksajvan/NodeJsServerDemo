const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost:27017/bookAPI_Test');
} else {
  const db = mongoose.connect('mongodb://localhost:27017/books')
}

const port = process.env.PORT || 3000;
// const bookRouter = express.Router();

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Prepend /api to given url
app.use('/api', bookRouter);

// GET test data using default url - localhost:port
app.get('/', (req, res) => {
  res.send('Greetings from my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
