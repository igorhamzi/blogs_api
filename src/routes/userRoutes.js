const express = require('express');
const userController = require('../controllers/userController');
const { isValidationName } = require('../middlewares/isValidationName');
const { isValidationEmail } = require('../middlewares/isValidationEmail');
const { isValidationPassword } = require('../middlewares/isValidationPassword');
const { isEmailExist } = require('../middlewares/isEmailExist');

const routes = express.Router();

routes.post('/',
isValidationName,
isValidationEmail,
isEmailExist,
isValidationPassword,
userController.createUser);

module.exports = routes;
