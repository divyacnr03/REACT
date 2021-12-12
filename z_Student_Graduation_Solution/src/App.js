import './App.css';
import Students from './Components/Students/Students'
import Graduation from './Components/Graduation/Graduation';
import './App.css'

function App() {

  return (
    <div className="App">
      
      <Students  />

          <div className="container center row white-text">
            <div className=" col s12 m4 l3 offset-l4 offset-m4 center card small blue-grey darken-1 card-content white-text">
                  <span className="card-title center">Graduation List</span>
                  <hr/>
                    <Graduation />
            </div>
          </div> 
    </div>
  );
}

export default App;

