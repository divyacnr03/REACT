import React, { useState } from 'react'
import { useSelector  } from 'react-redux'

const ItemsList = () => {

    let { gaganTask } = useSelector( state => state )

    return (<div className={'task-card'}>
        <div className={'employee'}>Gagan Task List</div>
        <ul className={'item-list'}>
            {
                gaganTask.map( task => (
                    <li className={'item'}> 
                    <input type="checkbox"/>
                    {task}
                    </li>
                ))
            }
        </ul>
    </div>)
}



export default ItemsList