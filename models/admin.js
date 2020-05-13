const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const admin = new mongoose.Schema({
   username: String,
   passwordHash: String,
});

module.exports = mongoose.model('Admin', admin);