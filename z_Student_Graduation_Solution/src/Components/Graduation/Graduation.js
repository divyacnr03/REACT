import React from 'react';
import { useSelector} from "react-redux";

function Graduation(){

    const { graduateStudents  } = useSelector (state => state)

    return(
        graduateStudents.map((elm,i) => {
            
        return (
                <div className="row" key={i}>
                    <div className="col s12">
                        {elm}
                    </div>
                </div>
            )
            
        })
    )
}

export default Graduation;