const mongoose = require('mongoose');

const blogPostSchema = new Mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    comments: [{ body: String, date: Date }],
    hidden: Boolean
});

module.exports = mongoose.model('BlogPost', blogSchema);