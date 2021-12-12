import React, {useState} from 'react';
import Student from './Student';

function Students(){

    const studentName = ['test', 'test'];
    const subjects = ['sub1', 'sub2'];

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