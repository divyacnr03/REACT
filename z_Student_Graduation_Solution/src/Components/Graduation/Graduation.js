import React from 'react';

function Graduation(){

    const graduateStudents =['abc', 'xyz'];

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