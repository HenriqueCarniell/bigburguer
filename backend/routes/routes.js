const express = require('express');
const Router = express();

// Controllers
const SendRegisterData = require('../controllers/SendRegisterData');
const SendLoginData = require('../controllers/SendLoginData');
const getAllProducts = require('../controllers/getAllProducts');
const productPage = require('../controllers/productPage');

Router.post('/send/register/data', SendRegisterData.SendRegisterData);
Router.post('/send/login/data', SendLoginData.SendLoginData);
Router.get('/get/all/products', getAllProducts.getAllProducts);
Router.get('/get/product/:idproduto', productPage.ProductPage);

module.exports = Router;