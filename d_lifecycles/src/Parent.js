import { useEffect, useState } from 'react';
import './App.css';
import Child from './Child';

function Parent(props) {
  const [displayMessage, setDisplayMessage] = useState("initial Value");

  const [counter, setCounter] = useState(0);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);


  function initialiseDisplayMessgae() {
    // console.log("In First useeffect")
    // if(displayMessage === 'initial Value'){
    // }
          setDisplayMessage( "Latest Value ")


  }


  useEffect(initialiseDisplayMessgae, [ state2,state3])

  function forceRerender(){
    setCounter(counter + 1)
  }

  function updateState1(){
    setState1(state1 + 1)
  }
  function updateState2(){
    setState2(state2 + 1)
  }
  function updateState3(){
    setState3(state3 + 1)
  }
  function updateState4(){
    setState4(state4 + 1)
  }


//   console.log("Just Before Render")
  return (
    <div className="App">
      <header className="App-header">
        <div> Demo UseEffect Parent {displayMessage}</div>
        <button onClick={forceRerender}> Force Rerender {counter}</button>
        <button onClick={updateState1}> Update State 1 {state1}</button>
        <button onClick={updateState2}> Update State 2 {state2}</button>
        <button onClick={updateState3}> Update State 3 {state3}</button>
        <button onClick={updateState4}> Update State 4 {state4}</button>
        <div>================================Parent ends here======================================</div>
        <Child messageSentByParent={state1}></Child>
      </header>
    </div>
  );
}

export default Parent;
