import React from 'react';
import './App.css'
import data from './data/products';

import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'
require.context('./images', false, /\.(png|jpe?g|svg)$/)



const App = () => {
    return (
        <div className="row">
                    <h1> Shopping Cart Example</h1>

                    <div className="col-md-6"><ProductList />  </div>

                    <div className="col-md-6"><Cart />  </div>
             </div>

    );
}

export default App;



