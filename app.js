const express      = require('express');
const config       = require('./utils/config');
const app          = express();
const blogsRouter  = require('./controllers/blogs');
const adminsRouter = require('./controllers/admins');
const loginRouter  = require('./controllers/login');
const mongoose     = require('mongoose');
// const bodyParser = require('body-parser');




mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });


  
// app.use(bodyParser.json());
app.use(express.json());

app.use('/api/blogs', blogsRouter);
app.use('/api/admins', adminsRouter);
app.use('/api/login', loginRouter);

app.get('/', (req, res) => {
  res.send('Hello Kern');
});

module.exports = app;