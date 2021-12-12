import React, { useState } from 'react';
import './Students.css'

function Student({student, studentSubjects}){

    return(
        <React.Fragment>
                <div className="col s12 m2 l3">
                    <div className="card medium blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title center">{student}</span>
                            <hr/>
                                {
                                    studentSubjects.map((elm,i) => {
                                        return(<div className="row" key={i}>
                                                    <div className="col s4">
                                                        {elm}
                                                    </div>
                                                    <div className="col s3">
                                                        <a  className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
                                                    </div>
                                                    <div className="col s2">
                                                        {/* <span>{currentAttn(elm)}</span> */}
                                                    </div>
                                                    <div className="col s3">
                                                        <a  className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
                                                    </div>
                                                </div>
                                    )})
                                }
                                {
                                    <React.Fragment>
                                        <hr/>
                                            <div className="row center">
                                                <div className="col s6">
                                                    Total
                                                </div>
                                                <div className="col s3">
                                                    {/* {att_total} */}
                                                </div>
                                            </div>
                                        <hr/>
                                    </React.Fragment>
                                    
                                }
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Student;

