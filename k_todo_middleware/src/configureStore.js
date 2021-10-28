import { createStore , applyMiddleware, compose} from 'redux';
import logger from 'redux-logger'

// 1) Create store

// a) reducer function

const defaultTaskList = {
    vatsalTask: [],
    vinayTask: [],
    ronakTask: [],
    gaganTask: [],
}


function reducer(state , action) {

    console.log("In my reducer", action)
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

// function logger({getState}){
//     return next => action => {
//         console.log("Inside my middleware 1",action)
//         action.text.newValue = 'adding from middleware'
//         console.log("Get state", getState())
//         return next(action)
//     } 
// }


// function logger2({getState}){
//     return next => action => {
//         console.log("Inside my middleware 2",action)
//         console.log("Get state", getState())

//         return next(action)
//     } 
// }

var store = createStore(reducer, compose(applyMiddleware(logger)));





export default store;