const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const adminUser = new Mongoose.Schema({
   email: String,
   password: String
});

module.exports = mongoose.model('AdminUser', adminUser);