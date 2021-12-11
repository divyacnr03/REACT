import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {

    const { products }  = useSelector(state => state);

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
