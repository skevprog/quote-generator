const Quote = require('../models/Quotes');

exports.getQuotes = async (req, res) => {
  try {
    await Quote.find()
      .then(data => {
        res.status(200).send({ message: 'Quotes', data });
      })
      .catch(err => {
        console.log(err.message, 'Unable to find data!');
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.addQuote = async (req, res) => {
  try {
    const { name, quote } = req.body;
    const newQuote = await new Quote({ name, quote });
    newQuote
      .save()
      .then(data => {
        res.status(200).send({ message: 'Quote saved to database', data });
      })
      .catch(err => {
        console.log('error! =>', err.message);
        res.status(400).send('Unable to save to database');
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.deleteQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    await Quote.deleteOne({ _id: quoteId })
      .then(quote => {
        res.status(200).send({ message: 'The quote was deleted succesfully', data: quote });
      })
      .catch(err => console.error(err.message));
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.getById = async (req, res) => {
  try {
    const quoteId = req.params.id;
    await Quote.findById(quoteId)
      .then(data => {
        res.status(200).send({ message: 'Success', data });
      })
      .catch(err => console.error(err.message));
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};
