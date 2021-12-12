import {createStore} from 'redux'


const defaultGradutionList = {
    graduateStudents : []
}

function reducer (state, action){
    let newState = Object.assign({}, state || defaultGradutionList)
    switch(action.type){
        case "ADD_TO_GRADUATION" : 
        newState.graduateStudents.push(action.data) 
        break;

        case "REMOVE_FROM_GRADUATION" : 
            let index = newState.graduateStudents.findIndex(element => element === 'March')
            newState.graduateStudents.splice(index, 1);
        break;
    }
    return newState;
}


var store = createStore(reducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;