import './App.css';
import Child1 from './inclass/Child1';
import Child2 from './inclass/Child2';
import Child3 from './inclass/Child3';
import Child4 from './inclass/Child4';
import IncrementDecrement from "./inclass/IncrementDecrement";
import Timer from './inclass/Timer'


function App() {

  const name = 'Mern'
  const studentNames = ['Vinay', 'Gagan', 'Sweta', 'Ronak', "vatsal"]
  const todayAttendance = ['Vinay', 'Sweta', 'Ronak', "vatsal", ""]

  const renderStudents = () => {
    const studentDivs = studentNames.map(element =>
      <div>{element}</div>)

    return studentDivs
  }


  const renderHouseFull = () => {
    if (studentNames.length === todayAttendance.length) {
      return <div>Yayy Housefull</div>
    } else {
      <div></div>
    }
  }

  const renderHouseFull1 = () => {
    return <div>Yayy Housefull</div>

  }


  const callback = () => {
    return <div> Props Passed from</div>

  }



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       Hello {studentNames[1]}
  //       <div id='studentdetails'>
  //         {renderStudents()}
  //       </div>
  //       <div>
  //         {/* {renderHouseFull()} */}
  //         {(studentNames.length === todayAttendance.length) ? <div>Yayy Housefull</div> : <div></div>}

  //       </div>

  //       <Child1 sugar={"High"} curlyHair ={false} />
  //       <Child2 tall={true} />
  //       <Child3 sugar={false} curlyHair ={true} tall={true}/>
  //       <Child4  />
  //       <IncrementDecrement initialCounter = {todayAttendance.length}/>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
       <header className="App-header">
          <Timer />
       </header>
    </div>
  )
}

export default App;


// Functional component is a function
// Is must a return stmt
// resturn html
// The react compoent should startign with a capital latter