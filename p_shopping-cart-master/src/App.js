import React from 'react';
import './App.css'
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
require.context('./images', false, /\.(png|jpe?g|svg)$/)

// TODO 1 Move the products to redux store, and initialise the tree with the elements of product

const App = () => {
    return (
        <div className="row">
                    <h1> Shopping Cart Example</h1>
                    <div className="col-md-6"><ProductList />  </div>
                    <div className="col-md-4"><Cart /></div>


             </div>

    );
}

export default App;



