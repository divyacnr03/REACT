import { useState } from "react";

function IncrementDecrement(props) {
    const [counter, setCounter] = useState(props.initialCounter);

    const onIncremtnClick = () => {
        setCounter(counter + 1)
    }

    const onDecrementClick = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <div> Increment </div>
            <div>{counter}</div>
            <button onClick={onIncremtnClick}>Increment</button>
            <button onClick={onDecrementClick}>Decrement</button>
        </div>
    )

}

export default IncrementDecrement;


// Have counter 