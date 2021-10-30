const products = require('./products')

 function getProductDetails(){
    try {
        return products
      } catch (error) {
        console.log(error)
      }
  }


  function addToCart(productId, status){
    try {
        products.filter(element => element.id == productId)[0].isInCart=status;
        return products
      } catch (error) {
        console.log(error)
      }
  }




  module.exports = { getProductDetails, addToCart }