import { createStore } from 'redux';
import products from '../data/products';



function reducer(state, action) {
    let newState = Object.assign({}, state || { products });


    console.log("Reducer called", action.type)

    switch (action.type) {
        case "ADD_TO_CART":
            newState.products.forEach(element => {
                if (element.id == action.data) {
                    element.isInCart = true;
                }
            });
            break;

        case "REMOVE_FROM_CART":
            newState.products.forEach(element => {
                if (element.id == action.data) {
                    element.isInCart = false;
                }
            });
            break;
    }



    return newState;

}


var store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// To create a store we need to pass a reducer

// Reducer is a function 
// with 2 arugmetn - currentState and action
// always return new state
// NEVER update the currentState that was sent as argument