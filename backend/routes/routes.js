const express = require('express');
const Router = express();

// Controllers
const SendRegisterData = require('../controllers/SendRegisterData');
const SendLoginData = require('../controllers/SendLoginData');
const getAllProducts = require('../controllers/getAllProducts');
const getDetailProducts = require('../controllers/getDatailProducts');
const addProductCart = require('../controllers/addProductCart');
const getProductCart = require('../controllers/getProductCart');
const deleteProductCart = require('../controllers/deleteProductCart');

Router.post('/send/register/data', SendRegisterData.SendRegisterData);
Router.post('/send/login/data', SendLoginData.SendLoginData);
Router.get('/get/all/products', getAllProducts.getAllProducts);
Router.get('/get/detailproduct/:idproduto', getDetailProducts.getDetailProduct);
Router.get('/add/cart/product/:idproduto/:idusuario', addProductCart.addProductCart);
Router.get('/get/cart/product/:idusuario', getProductCart.getProductCart);
Router.delete('/delete/product/:idproduto/:idusuario', deleteProductCart.deleteProductCart)

module.exports = Router;