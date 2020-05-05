const bcrypt      = require('bcrypt');
const adminRouter = require('express').Router();
const Admin       = require('../models/adminUser');


adminRouter.post('/', async (request, response) => {
  const body = request.body;

  const saltRounds   = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);


  const admin = new Admin({
    username: body.username,
    passwordHash
  });
  
  const savedAdmin = await admin.save();

});

module.exports = adminRouter;

