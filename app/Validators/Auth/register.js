const { body } = require('express-validator/check');

module.exports = [
  body('email').exists().withMessage('email_is_required'),
  body('password').exists().withMessage('password_is_required')
];