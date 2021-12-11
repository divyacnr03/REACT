import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {

    const { products } = useSelector(state => state);
 
       const items = products.filter(element => element.isInCart)
       const total = items.reduce( (total,element) => total += element.price, 0);

    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        { items && items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item}  />
                                ))}
                            </div>
                        )}
                        <div className="cart__total">Total: {total} EUR</div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
