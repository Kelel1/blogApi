const config = require('./utils/config');
const express = require('express');
const app = express();
const blogsRouter = require('./controllers/blogs');
app.get('/', (req, res) => {
  res.send('Hello Kern');
});

app.use('/api/blogs', blogsRouter);

module.exports = app;