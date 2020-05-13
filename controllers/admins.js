const bcrypt        = require('bcrypt');
const adminsRouter   = require('express').Router();
const Admin         = require('../models/admin');




// Disable after creating initial admin.

adminsRouter.post('/', async (request, response) => {
  const body = request.body;

  const saltRounds   = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);


  const admin = new Admin({
    username: body.username,
    passwordHash,
  });
  
  const savedAdmin = await admin.save();

  response.json(savedAdmin);

});

module.exports = adminsRouter;

