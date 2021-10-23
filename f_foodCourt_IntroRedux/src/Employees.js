import './App.css';
import Vinay from './inclass/Vinay';
import Vatsal from './inclass/Vatsal';

function Employees() {
  return (
    <div className="App">
      <header style={{ 'background': '#926239' }}>
        <h1 style={{ 'color': 'white', 'width': '800px', 'margin': '0 auto' }}>Our Company Pantry</h1>
      </header>
      <Vinay />
      <Vatsal />
    </div>
  );
}

export default Employees;
