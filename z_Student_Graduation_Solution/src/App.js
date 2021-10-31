import './App.css';
import { useDispatch, useSelector} from 'react-redux';

import Students from './Components/Students/Students'
import { useEffect, useState } from 'react';
import Graduation from './Components/Graduation/Graduation';
import './App.css'

function App() {


  let studentsName = useSelector(state => state.studentName);
  let studentsSubject = useSelector(state => state.subjects);
  let graduateStudent = useSelector(state => state.graduation);

  let [showComponent,setShowComponent] = useState(true);

  const dispatch = useDispatch();
  
  

  const updateComponentValue = (value) => {
console.log(value)
    if(value === "addAttendance"){
      if(showComponent != true){
        setShowComponent(true)
      }
    }else if(value === "subAttendance"){
      if(graduateStudent.length === 0){
        setShowComponent(false)
      }
    }

  }

  return (
    <div className="App">
      
      <Students studentsName={studentsName} studentsSubject={studentsSubject} updateComponentValue={updateComponentValue} />

      { showComponent !== false ? 
          <div className="container center row white-text">
            <div className=" col s12 m4 l3 offset-l4 offset-m4 center card small blue-grey darken-1">
              <div className="card-content white-text">
                  <span className="card-title center">Graduation List</span>
                  <hr/>
                    {/* <Graduation graduateStudent={graduateStudent} /> */}
                    <Graduation />
              </div>
            </div>
          </div> 
        : "" }
    </div>
  );
}

export default App;

