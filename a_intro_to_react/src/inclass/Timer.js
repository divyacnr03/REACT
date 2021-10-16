import { useState } from "react";

function Timer(props) {
    const [timer, setTimer] = useState(0);

 



    const onStartTimerClick = () => {
      
    
        setInterval( () => {
            setTimer(timer + 1)
        } ,1000)
    }

    return (
        <div>
            <div> Timer </div>
            <div>{timer}</div>

            <button onClick= {onStartTimerClick} > startTimer</button>
        </div>
    )

}

export default Timer;


// Have counter 