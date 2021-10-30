import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {

    // TODO : GEt this data from redux 

 
       const items = [
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
                        <div className="cart__total">Total: TBD </div> 
                         {/* TODO to be calculated */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
