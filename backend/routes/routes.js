const express = require('express');
const Router = express();

// Controllers
const SendRegisterData = require('../controllers/SendRegisterData');
const SendLoginData = require('../controllers/SendLoginData');
const getAllProducts = require('../controllers/getAllProducts');
const productPage = require('../controllers/productPage');
const getDetailProducts = require('../controllers/getDatailProducts')

Router.post('/send/register/data', SendRegisterData.SendRegisterData);
Router.post('/send/login/data', SendLoginData.SendLoginData);
Router.get('/get/all/products', getAllProducts.getAllProducts);
Router.get('/get/product/:idproduto', productPage.ProductPage);
Router.get('/get/detailproduct/:idproduto', getDetailProducts.getDetailProduct);

module.exports = Router;