import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';
import products from '../../data/products'; // TODO this data should come from redux

const ProductList = () => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}


export default ProductList;
