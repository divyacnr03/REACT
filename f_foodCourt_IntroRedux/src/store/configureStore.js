import { createStore } from 'redux';

let defaultState = {
    coffeePot : 0,
    biscuits: 10
}


function attender (state, action){     //Reducer
    let newState = Object.assign({}, state || defaultState)   // initiallising my State



    switch(action.type){
        case "DRINK_COFFEE" :  newState.coffeePot -= 1; break;
        case "FILL_COFFEE_POT" :     newState.coffeePot += 10; break;
        case "EAT_BISCUITS" :     newState.biscuits -= action.text; break;
    }



    return newState;
}

var store = createStore(attender, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;




    // var store = createStore(covidDetails,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

