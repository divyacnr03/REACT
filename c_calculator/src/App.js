import React, { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("");

  function clickHandle(e){
    setResult(result + e.target.name)
  }

  function calculate(){
    try{
      setResult(eval(result));
    } catch{
      setResult("Error");
    }
  }

  function onClickOfCE(){
    setResult("");
  }

  function onClickOfC(){
    setResult(result.slice(0, result.length - 1 ));
  }

  return (
    <div className="calculator">
      <form>
        <input type="text"  value={result}/>

      </form>
      <div className="keypad">
        <button name="(" onClick={clickHandle} >(</button>
        <button onClick={onClickOfCE} >CE</button>
        <button name=")" onClick={clickHandle}>)</button>
        <button onClick={onClickOfC}>C</button>
        <button name="1" onClick={clickHandle} >1</button>
        <button name="2" onClick={clickHandle}>2</button>
        <button name="3" onClick={clickHandle} >3</button>
        <button name="+" onClick={clickHandle} >+</button>
        <button name="4" onClick={clickHandle} >4</button>
        <button name="5" onClick={clickHandle} >5</button>
        <button name="6" onClick={clickHandle} >6</button>
        <button name="-" onClick={clickHandle} >-</button>
        <button name="7" onClick={clickHandle} >7</button>
        <button name="8" onClick={clickHandle} >8</button>
        <button name="9" onClick={clickHandle} >9</button>
        <button name="*" onClick={clickHandle} >*</button>
        <button name="." onClick={clickHandle} >.</button>
        <button name="0" onClick={clickHandle} >0</button>
        <button onClick={calculate}>=</button>
        <button name="/" onClick={clickHandle} >/</button>

      </div>

    </div>
  )


}







export default App;
