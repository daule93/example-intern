
const { validationResult } = require('express-validator/check');
const Controller = require('../Controller');

const AuthService = require('../../Services/AuthService');

class AuthController extends Controller{
  constructor() {
    super();
    this.authService = new AuthService();
  }

  async register({ req, res, next }) {
    // {email: 'email', password: 'password'}
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const options = {
        message: errors.array()[0].msg
      };
      return this.inValidResponse(res, options)
    }
    const body = req.body;
    const result = await this.authService.register({ body });
    if(result.error) {
      return this.errorResponse(res, result);
    }
    return this.createdResponse(res, result);
  }

  async login({ req, res, next }) {
    // {email: 'email', password: 'password'}
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const options = {
        message: errors.array()[0].msg
      };
      return this.inValidResponse(res, options)
    }
    const body = req.body;
    const result = await this.authService.login({ body });
    if(result.error) {
      return this.errorResponse(res, result);
    }
    return this.successResponse(res, result);
  }
}

module.exports = AuthController;