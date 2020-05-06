const bcrypt      = require('bcrypt');
const userRouter  = require('express').Router();
const User        = require('../models/user');


userRouter.post('/', async (request, response) => {
  const body = request.body;

  const saltRounds   = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);


  const user = new User({
    username: body.username,
    passwordHash,
    admin: body.admin
  });
  
  const savedUser = await user.save();

  response.json(savedUser);

});

module.exports = userRouter;

