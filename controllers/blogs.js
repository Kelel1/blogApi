const blogsRouter = require('express').Router();
const BlogPost = require('../models/blogPost');

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
})

blogsRouter.post('/', (request, response, next) => {
  const body = request.body
  
  const blog = new BlogPost({
    content: b
  })
})