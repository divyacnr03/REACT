import { createStore } from 'redux';

// 1) Create store

// a) reducer function

const defaultTaskList = {
    vatsalTask: [],
    vinayTask: [],
    ronakTask: [],
    gaganTask: [],
}


function reducer(state , action) {

    let newState = Object.assign({}, state || defaultTaskList)

    if(action && action.text){
        switch (action.text.name) {
            case 'vinay': newState.vinayTask.push(action.text.task);
                break;
            case 'vatsal': newState.vatsalTask.push(action.text.task);
                break;
            case 'ronak': newState.ronakTask.push(action.text.task);
                break;
            case 'gagan': newState.gaganTask.push(action.text.task);
                break;
        }
    }



    return newState;

}

var store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





export default store;