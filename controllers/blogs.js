const blogsRouter = require('express').Router();
const BlogPost    = require('../models/blogPost');
const jwt         = require('jsonwebtoken');


blogsRouter.get('/', (request, response, next) => {
  BlogPost.find({}).then(blogs => {
    response.json(blogs.map(blog => blog.toJSON()));
  })
});

blogsRouter.get('/:id', (request, response, next) => {
  BlogPost.findById(request.params.id)
    .then(blog => {
      if(blog) {
        response.json(blog.toJSON());
      } else {
        response.status(404).end();
      }       
    })
    .catch(error => next(error));
});

// Get blogger token
const getTokenFrom = requset => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    return authorization.substring(7);
  }
  return null;
}

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(requset);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await user.findById(decodedToken.id);

  
  const blog = new BlogPost({
    title: body.title,
    content: body.content,
    comments: body.comments,
    date: new Date(),
    hidden: body.hidden || false
  });

//  See about converting to async routes. Thursday 4.30.2020
const savedBlog = await blog.save();
user.blogs = user.blogs.concat(savedBlog._id);
await user.save();

});


module.exports = blogsRouter