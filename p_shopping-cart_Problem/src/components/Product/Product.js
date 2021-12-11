import React from 'react';
import { useDispatch } from 'react-redux'

function Product({ name, price, currency, image, isInCart, id }) {

    const dispatch = useDispatch();

    function addToCart() {
        dispatch({ type: 'ADD_TO_CART', data: id })
    }

    function removeFromCart() {
        dispatch({ type: 'REMOVE_FROM_CART', data: id })
    }

    return (
        <div className="product thumbnail">
            <img src={require('../../' + image)} alt="product" />
            <div className="caption">
                <h3>{name}</h3>
                <div className="product__price">{price} {currency}</div>
                <div className="product__button-wrap">
                    {isInCart ?
                        <button className={'btn btn-danger'} onClick={removeFromCart} >Remove</button>
                        :
                        <button className={'btn btn-primary'} onClick={addToCart} >Add to cart</button>

                    }

                </div>
            </div>
        </div>
    );
}



export default Product;
