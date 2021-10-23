import React, { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'

const ItemsList = () => {

    let { gaganTask } = useSelector( state => state )
    const dispatch = useDispatch();

    function handleCheckBox(e){
        dispatch({
            type: 'COMPLETE_TASK',
            text:  {name:'gagan', task:e.target.id}
        })
    }

    return (<div className={'task-card'}>
        <div className={'employee'}>Gagan Task List</div>
        <ul className={'item-list'}>
            {
                gaganTask.map( task => (
                    <li className={'item'}> 
                    <input type="checkbox" onClick={handleCheckBox} id={task.taskname}/>
                    { task.isChecked ? <strike>{task.taskname}</strike> : task.taskname}
                    </li>
                ))
            }
        </ul>
    </div>)
}



export default ItemsList