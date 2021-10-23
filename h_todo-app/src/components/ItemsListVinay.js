import React from 'react'
import { useSelector  } from 'react-redux'


const ItemsList = () => {


    let { vinayTask } = useSelector(state => state)

    return (<div className={'task-card'}>
        <div className={'employee'}>Vinay Task List</div>
        <ul className={'item-list'}>
            {
                vinayTask.map(task => (
                    <li className={'item'}><input type="checkbox"/>
                    {task}</li>
                ))
            }
        </ul>
    </div>)

}



export default ItemsList