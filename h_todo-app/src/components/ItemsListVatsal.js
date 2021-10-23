import React from 'react'
import { useSelector  } from 'react-redux'


const ItemsList = () => {



    let { vatsalTask } = useSelector( state => state )

    return (<div className={'task-card'}>
        <div className={'employee'}>Vatsal Task List</div>
        <ul className={'item-list'}>
            {
                vatsalTask.map( task => (
                    <li className={'item'}> 
                     <input type="checkbox"/>
                    {task.taskname}</li>
                ))
            }
        </ul>
    </div>)
}



export default ItemsList