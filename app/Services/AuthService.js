
const UserRepository = require('../Repositories/UserRepository');
const JWT = require('json-web-token');

const Hash = require('../Helpers/Hash');
class AuthService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async register({ body }) {
    try {
      const userCheck = await this.userRepo.getUserByEmail(body.email);
      if(userCheck) {
        return errorCode.email_is_existed;
      }
      const user = await this.userRepo.create(body);
      const token = JWT.encode(APP_KEY, {id: user.id});
      if(token.error) {
        return errorCode.create_token_fails
      }

      const result = errorCode.success;
      result.data = { token: token.value };
      return result;
    } catch (e) {
      console.log(e);
    }

  }

  async login({ body }) {
    try {
      const user = await this.userRepo.getUserByEmail(body.email);
      if(!user) {
        return errorCode.user_not_existed;
      }
      const check = await Hash.compare(body.password, user.password);
      if(!check) {
        return errorCode.password_invalid;
      }
      const token = JWT.encode(APP_KEY, {id: user.id});
      if(token.error) {
        return errorCode.create_token_fails
      }
      const result = errorCode.success;
      result.data = { token: token.value };
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = AuthService;