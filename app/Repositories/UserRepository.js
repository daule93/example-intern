
const User = require('../Models/User');

class UserRepository {
  constructor() {
    this.model = User;
  }

  async getUserByEmail(email) {
    return await this.model.query().where('email', email).first();

  }

  async create(body) {
    return await this.model.query().insert(body);
  }
}

module.exports = UserRepository;