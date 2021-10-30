import React from 'react';

function Product ({ name, price, currency, image, isInCart, id }){


        return (
            <div className="product thumbnail">
                <img src={require('../../' + image)} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick = { () => console.log(`${name} is added to cart`)}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
}



export default Product;
