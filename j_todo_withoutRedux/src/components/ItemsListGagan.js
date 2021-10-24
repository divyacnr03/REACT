import React from 'react'

const ItemsList = ({ tasks }) => {

    return (<div className={'task-card'}>
        <div className={'employee'}>Gagan Task List</div>
        <ul className={'item-list'}>
            {
                tasks.map( task => (
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