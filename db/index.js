const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@cluster0-zfjxk.mongodb.net/quotes?retryWrites=true&w=majority';

const connectDb = () =>
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(connection => {
      console.log('Connection to db succes!');
    })
    .catch(err => {
      console.error('Connection failure', err.message);
    });

module.exports = connectDb;
