import React from 'react';
import { useDispatch } from 'react-redux';

const CartItem = ({ name, price, currency, onClick, id }) => {

    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch({ type: 'REMOVE_FROM_CART', data: id })
    } 

    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={removeFromCart}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}


export default CartItem;
