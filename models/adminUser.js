const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const adminUser = new Mongoose.Schema({
   username: String,
   passwordHash: String
});

module.exports = mongoose.model('AdminUser', adminUser);