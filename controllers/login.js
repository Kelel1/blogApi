const jwt          = require('jsonwebtoken');
const bcrypt       = require('bcrypt');
const loginRouter  = require('express').Router();
const Admin        = require('../models/admin');

loginRouter.post('/', async (request, response) => {
  const body = request.body;

  const admin = await Admin.findOne({ username: body.username });
  const passwordCorrect = admin === null
    ? false
    : await bcrypt.compare(body.password, admin.passwordHash);

  if (!(admin && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    });
  }

  const userForToken = {
    username: admin.username,
    id: admin._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET);

  response
    .status(200)
    .send({ token, username: admin.username })
});

module.exports = loginRouter
