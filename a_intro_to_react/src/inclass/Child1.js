import { useState } from "react";

function Child1(props) {

    const [anger, setAnger] = useState('not Angry');    // UseStae is a function 
                                            // It return 2 things - state, function to update the state

    // anger is the state of the Child1
    // Only Chidl1 can update or access the state
    // To change the state Child1 needs to invoke the function setAnger




    const onAngryClick = () => {
        setAnger("Very Angry")
    }


    return (
        <div>
            <div> Hey Im Child1</div>
            {/* {props.callback()} */}
            { anger}
            <button onClick={onAngryClick}>Change Angry</button>
        </div>
    )

}

export default Child1;