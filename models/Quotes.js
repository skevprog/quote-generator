const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Add the author name'],
  },
  quote: {
    type: String,
    required: [true, 'Add a quote'],
  },
});

module.exports = mongoose.model('Quote', QuoteSchema);
