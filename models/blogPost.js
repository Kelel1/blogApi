const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);


const blogPostSchema = new Mongoose.Schema({
    title: String,
    content: String,    
    comments: [{ body: String, date: Date }],
    date: Date,
    hidden: Boolean
});

module.exports = mongoose.model('BlogPost', blogPostSchema);