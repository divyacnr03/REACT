import { actionType } from "./actionTypes"


export function additems(value){

    // data vallidation
    //data conversion

    return {
        type: actionType.addItem,
        text : value
    }
}

export function updateItems(value){
    return ({
        type: "UPDATE_ITEMS",
        text : value
    })
}