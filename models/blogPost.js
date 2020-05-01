const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);


const blogPostSchema = new Mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    comments: [{ body: String, date: Date }],
    hidden: Boolean
});

module.exports = mongoose.model('BlogPost', blogPostSchema);