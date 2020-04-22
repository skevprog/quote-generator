const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');

const PORT = 5000;

const app = express();

connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
