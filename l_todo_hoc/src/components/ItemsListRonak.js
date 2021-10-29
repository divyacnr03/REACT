import React from 'react'
import { useSelector  } from 'react-redux'


const ItemsList = () => {


    let { ronakTask } = useSelector( state => state )

    return (<div className={'task-card'}>
        <div className={'employee'}>Roank Task List</div>
        <ul className={'item-list'}>
            {
                ronakTask.map( task => (
                    <li className={'item'}>                    
                    <input type="checkbox"/>
                    {task.taskname}
                    </li>
                ))
            }
        </ul>
    </div>)
}



export default ItemsList