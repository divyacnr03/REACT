import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import ItemsListVinay from './ItemsListVinay';
import ItemsListVatsal from './ItemsListVatsal';
import ItemsListRonak from './ItemsListRonak';
import ItemsListGagan from './ItemsListGagan';
import './App.css'

const App = () => {

    const [task, setTask] = useState();

    const [vatsalTask, setVatsalTask] = useState([]);
    const [vinayTask, setVinayTask] = useState([]);
    const [ronakTask, setRonakTask] = useState([]);
    const [gaganTask, setGaganTask] = useState([]);


    function handleAssignTask(e) {

        switch (e.target.name) {
            case 'vinay':
                setVinayTask([...vinayTask, task]);
                break;
            case 'vatsal': setVatsalTask([...vatsalTask, task]);
                break;
            case 'ronak': setRonakTask([...ronakTask, task]);
                break;
            case 'gagan': setGaganTask([...gaganTask, task]);
                break;
        }

    }


    function handleTaskChange(e) {
        console.log("editied")
        setTask(e.target.value);
    }

    return (
        <div >
            <h1>Project Work Tracker</h1>

            <div className='center'>
                <input className='task-input' type="text" name="name" onChange={handleTaskChange} />
                <br />
                <button onClick={handleAssignTask} name='vinay' >Assign Task to Vinay </button>
                <button onClick={handleAssignTask} name='vatsal' >Assign Task to Vatsal </button>
                <button onClick={handleAssignTask} name='ronak'>Assign Task to Ronak </button>
                <button onClick={handleAssignTask} name='gagan' >Assign Task to Gagan </button>
            </div>
            <hr />
            <div class="container">
                <div className="first"> <ItemsListVinay tasks={vinayTask}/></div>
                <div className="first"> <ItemsListVatsal tasks={vatsalTask}/></div>
                <div className="first"> <ItemsListRonak tasks={ronakTask}/></div>
                <div className="first"><ItemsListGagan tasks={gaganTask}/></div>
            </div>

        </div>
    )
}

export default App