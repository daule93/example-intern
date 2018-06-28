
const Post = require('../Models/Post');

class PostRepository {
  constructor() {
    this.model = Post;
  }

}

module.exports = PostRepository;