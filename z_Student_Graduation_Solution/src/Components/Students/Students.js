import React, {useState} from 'react';
import Student from './Student';

function Students(){

    const studentName = ['Sweta', 'Vatsal','Ronak', "Vinay"];
    const subjects = ['Javascript', 'HTML', 'NodeJs', 'Mongo'];

    return(
        <div className="row">
            {
                studentName.map((elm,i) => {
                    return <Student key={i} student={elm} studentSubjects={subjects}  />
                })
            }
        </div>
    )
}

export default Students;