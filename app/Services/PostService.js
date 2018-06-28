const PostRepository = require('../Repositories/PostRepository');
const UserRepository = require('../Repositories/UserRepository');
class PostService {
  constructor() {
    this.postRepo = new PostRepository();
    this.userRepo = new UserRepository()
  }
}

module.exports = PostService;