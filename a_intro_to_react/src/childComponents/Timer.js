import  { useState } from "react";
import "../App.css";

const Timer = () => {
	const [timer, setTimer] = useState(0)

	const handleTimer = () => {
        setInterval(() => setTimer(timer + 1) ,1000)
		
	}

    handleTimer();
	return (
		<div >
			Timer App
			<div > {timer} </div>
		</div>
	)
}

export default Timer
