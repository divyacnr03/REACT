import React, {useState} from 'react';
import Student from './Student'
import './Students.css'

function Students({studentsName, studentsSubject, updateComponentValue}){

    return(
        <div className="row">
            {
                studentsName.map((elm,i) => {
                    return <Student key={i} student={elm} studentSubjects={studentsSubject} updateComponentValue={updateComponentValue} />
                })
            }
        </div>
    )
}

export default Students;