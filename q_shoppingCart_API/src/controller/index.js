var express = require('express');
var router = express.Router();
var fs = require('fs');
const { networkInterfaces } = require('os');
const { getProductDetails, addToCart } = require('../service/cart')


/* GET home page. */
router.post('/cart/add/:productId', function(req, res, next) {
  
  res.json({products : addToCart(req.params.productId, true)})
  
});


router.post('/cart/remove/:productId', function(req, res, next) {
  
  res.json({products : addToCart(req.params.productId, false)})
  
});



router.get('/products', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({products : getProductDetails()})
  
});





module.exports = router;
