const express = require('express');

const { getQuotes, addQuote, deleteQuote, getById } = require('../controllers/quotes');

const router = express.Router();

router
  .route('/quotes')
  .get(getQuotes)
  .post(addQuote);

router
  .route('/quotes/:id')
  .delete(deleteQuote)
  .get(getById);

module.exports = router;
