import { createStore } from 'redux';

// 1) Create store

// a) reducer function

const defaultTaskList = {
    vatsalTask: [],
    vinayTask: [],
    ronakTask: [],
    gaganTask: [],
    // gaganTask:[
    //     {
    //         taskname : '',
    //         isChecked : true
    //     }
    // ]
}


function reducer(state, action) {

    let newState = Object.assign({}, state || defaultTaskList)


    switch (action.type) {
        case "COMPLETE_TASK":
            switch (action.text.name) {
                // case 'vinay': newState.vinayTask.push({ taskname: action.text.task, isChecked: false });
                //     break;
                // case 'vatsal': newState.vatsalTask.push({ taskname: action.text.task, isChecked: false });
                //     break;
                // case 'ronak': newState.ronakTask.push({ taskname: action.text.task, isChecked: false });
                    // break;
                case 'gagan': 
                 

                newState.gaganTask.forEach(element => {
                    if(element.taskname === action.text.task) {
                        element.isChecked = true
                    }
                });
                    break;
            }
            break;
        case "ADD_ITEMS":
            switch (action.text.name) {
                case 'vinay': newState.vinayTask.push({ taskname: action.text.task, isChecked: false });
                    break;
                case 'vatsal': newState.vatsalTask.push({ taskname: action.text.task, isChecked: false });
                    break;
                case 'ronak': newState.ronakTask.push({ taskname: action.text.task, isChecked: false });
                    break;
                case 'gagan': newState.gaganTask.push({ taskname: action.text.task, isChecked: false });
                    break;
            }
            break;
        default : break;

    }

    return newState;

}

var store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





export default store;