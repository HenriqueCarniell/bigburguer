const express = require('express');
const Router = express();

// Controllers
const SendRegisterData = require('../controllers/SendRegisterData');
const SendLoginData = require('../controllers/SendLoginData');

Router.post('/send/register/data', SendRegisterData.SendRegisterData);
Router.post('/send/login/data', SendLoginData.SendLoginData);

module.exports = Router;