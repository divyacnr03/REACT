To run the application :
1) cd q_shoppingCart_API
2) npm install
3) npm start

 If you get port 8080 already in use error, then just Cntrl + C and start it again by running npm start


Routes Details:

1) Get all teh product details :
  method: 'get',
  url: 'http://localhost:8080/products',
  headers: { }

2) To add a item to cart :

var config = {
  method: 'post',
  url: 'http://localhost:8080/cart/add/${ProductId}',
  headers: { }
};


3) To remove an item from cart:
var config = {
  method: 'post',
  url: 'http://localhost:8080/cart/remove/${ProductId}',
  headers: { }
};