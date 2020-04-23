const express = require('express');
const booksController = require('../controllers/booksController.js').default;

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);

  // route: /api/books
  // GET  - get all books
  // POST - save new book
  bookRouter.route('/books')
  .post(controller.post)
  .get(controller.get);

  // we are using middleware here for specific route because we have Book.findById
  // that repeats on several places, so we want to replace it with this.
  // 'next' is the function that middleware uses to signal that it is done with the processing
  // and that is ready to pass that request onto the next thing 
  bookRouter.use('/books/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  // route: /api/books/:id
  // GET    - get book for given id
  // UPDATE - update document for given id
  // PATCH  - update just one property
  // DELETE - delete document for given id
  bookRouter.route('/books/:bookId')
  .get((req, res) => res.json(req.book))
  .put((req, res) => {
    
    const { book } = req;

    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.read = req.body.read;
    req.book.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });

    return res.json(book);
  })
  .patch((req, res) => {
    const { book } = req;

    if (req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach(item => {
      const key = item[0];
      const value = item[1];
      book[key] = value;
    })

    req.book.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  })
  .delete((req, res) => {
    req.book.remove((err) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  });

  return bookRouter;
}

module.exports = routes;