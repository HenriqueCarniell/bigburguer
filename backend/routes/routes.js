const express = require('express');
const Router = express();

// Controllers
const SendRegisterData = require('../controllers/SendRegisterData');

Router.post('/send/register/data', SendRegisterData.SendRegisterData);

module.exports = Router;