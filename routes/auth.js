const express = require('express');
const router = express.Router();

//validator
const RegisterValidator = require('../app/Validators/Auth/register');

const AuthController = require('../app/Controllers/Http/AuthController');
const authCtrl = new AuthController();

router.post('/register', RegisterValidator, async function(req, res, next) {
  await authCtrl.register({ res, req });
});

router.post('/login', RegisterValidator, async function(req, res, next) {
  await authCtrl.login({ res, req });
});

module.exports = router;
