const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const user = new mongoose.Schema({
   username: String,
   passwordHash: String,
   admin: Boolean
});

module.exports = mongoose.model('User', user);