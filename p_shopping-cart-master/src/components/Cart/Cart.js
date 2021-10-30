import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ items, total, currency }) => {

    // this is a demo code, to show how the data should look like
    // WIll be removed once the implemnetation is done
    // DONT DO THIS, because we are mutating here
    if(!items){
        items = [
            {
                id: 1,
                name: 'Ohrensessel Josslyn',
                price: 499.99,
                currency: 'EUR',
                onClick: () => console.log(` Ohrensessel Josslyn removed from cart`),
              },
              {
                id: 2,
                name: 'Sessel Sofie',
                price: 249.99,
                currency: 'EUR',
                onClick: () =>   console.log(` Sessel Sofie removed from cart`),
              },

        ]
    }

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
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
