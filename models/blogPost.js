const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);


const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,    
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);