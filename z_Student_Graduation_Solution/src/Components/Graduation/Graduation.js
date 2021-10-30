import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import './Graduation.css'

function Graduation(){

    let graduateStudents = useSelector(state => state);

    return(
        graduateStudents.graduation.map((elm,i) => {
            
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