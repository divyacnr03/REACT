import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'

const App = () => {

    const [task, setTask] = useState();
    const dispatch = useDispatch();
    // 2) Whenever shweta added any task and click ons any button, this task needs to added to the redux
    // a) Handle sweta editing the input
    // b) handle her clicking the buttons
 
    function handleAssignTask(e){
           // c) updating redux
        dispatch({
            type: "ADD_ITEMS",
            text: {name:e.target.name, task:task}
        })
    }


    function handleTaskChange(e){
        console.log("editied")
        setTask(e.target.value);
    }

    return (
        <div >
            <h1>Project Work Tracker</h1>

                <div className='center'>
                    <input className='task-input' type="text" name="name" onChange={handleTaskChange} />
                    <br/>
                    <button  onClick={handleAssignTask} name ='vinay' >Assign Task to Vinay </button>
                    <button  onClick={handleAssignTask} name ='vatsal' >Assign Task to Vatsal </button>
                    <button  onClick={handleAssignTask} name ='ronak'>Assign Task to Ronak </button>
                    <button  onClick={handleAssignTask} name ='gagan' >Assign Task to Gagan </button>
                </div>
      

        </div>
    )
}

export default App