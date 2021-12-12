import React, {useState} from 'react';
import Student from './Student';
import { useSelector } from 'react-redux';
import './Students.css'

function Students(){

    const { studentName } = useSelector(state => state)
    const { subjects } = useSelector(state => state)


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