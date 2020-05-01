const config = require('./utils/config');
const express = require('express');
const app = express();
// const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello Kern');
});

module.exports = app;