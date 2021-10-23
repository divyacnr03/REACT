import { createStore } from 'redux';


function covidDetails(state, actions){
    let newState = Object.assign({}, state || { selectedCountry : ""})

    
    newState.selectedCountry = actions.text;
    return newState;
}



var store = createStore(covidDetails,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





export default store;




    // var store = createStore(covidDetails,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

