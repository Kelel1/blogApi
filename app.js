const express = require('express');
const app = express();
// const config = require('./utils/config');
// const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello Kern');
});

module.exports = app;