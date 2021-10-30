import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import './Students.css'

function Student({student, studentSubjects, updateComponentValue}){

    const dispatch = useDispatch();
    let [att_HTML,setAtt_HTML] = useState(0);
    let [att_CSS,setAtt_CSS] = useState(0);
    let [att_JAVASCRIPT,setAtt_JAVASCRIPT] = useState(0);
    let [att_GIT,setAtt_GIT] = useState(0);
    let [att_total,setAtt_Total] = useState(0);

    const checkClass = (subject) =>{
        
        if(subject === "HTML"){
            if(att_HTML === 5){
                return "btn-floating btn-small waves-effect waves-light red disabled";
            }else if (att_HTML === 0){
                return "btn-floating btn-small waves-effect waves-light red"
            }
            setAtt_HTML(att_HTML+1)
        }else if(subject === "CSS"){
            setAtt_CSS(att_CSS+1)
        }else if(subject === "JAVASCRIPT"){
            setAtt_JAVASCRIPT(att_JAVASCRIPT+1)
        }else if(subject === "GIT"){
            setAtt_GIT(att_GIT+1)
        }
    }

    const addAttendance = (name, subject) =>{
        // console.log("Name :"+name +" Subject :"+subject)
        if(subject === "HTML"){
            setAtt_HTML(att_HTML+1)
        }else if(subject === "CSS"){
            setAtt_CSS(att_CSS+1)
        }else if(subject === "JAVASCRIPT"){
            setAtt_JAVASCRIPT(att_JAVASCRIPT+1)
        }else if(subject === "GIT"){
            setAtt_GIT(att_GIT+1)
        }

        setAtt_Total(att_total+1)

        if((att_total+1) === 5){
            let data = {
                name : name
            }
            
            dispatch({'type' : 'addAttendance' , data : data})
            updateComponentValue("addAttendance")
            
        }
    }

    const subAttendance = (name, subject) =>{
        // console.log("Name :"+name +" Subject :"+subject)
        if(subject === "HTML"){
            setAtt_HTML(att_HTML-1)
        }else if(subject === "CSS"){
            setAtt_CSS(att_CSS-1)
        }else if(subject === "JAVASCRIPT"){
            setAtt_JAVASCRIPT(att_JAVASCRIPT-1)
        }else if(subject === "GIT"){
            setAtt_GIT(att_GIT-1)
        }
        
        setAtt_Total(att_total-1)

        if((att_total-1) < 5){
            let data = {
                name : name
            }
            
            dispatch({'type' : 'subAttendance' , data : data})
            updateComponentValue("subAttendance")
        }
        
    }

    const currentAttn = (subject) => {
        if(subject === "HTML"){
            return att_HTML
        }else if(subject === "CSS"){
            return att_CSS
        }else if(subject === "JAVASCRIPT"){
            return att_JAVASCRIPT
        }else if(subject === "GIT"){
            return att_GIT
        }
    }

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
                                                        <a onClick={() => addAttendance(student, elm)} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
                                                    </div>
                                                    <div className="col s2">
                                                        <span>{currentAttn(elm)}</span>
                                                    </div>
                                                    <div className="col s3">
                                                        <a onClick={() => subAttendance(student, elm)} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
                                                        {/* <a onClick={() => subAttendance(student, elm)} className={checkClass(elm)}><i className="material-icons">remove</i></a> */}
                                                        
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
                                                    {att_total}
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

// <div className="row">
//     <div className="col s4">
//         HTML :
//     </div>
//     <div className="col">
//         <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
//     </div>
// </div>
// <div className="row">
//     <div className="col s4">
//         CSS :
//     </div>
//     <div className="col">
//         <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
//     </div>
// </div>
// <div className="row">
//     <div className="col s4">
//         JAVASCRIPT :
//     </div>
//     <div className="col">
//         <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
//     </div>
// </div>
// <div className="row">
//     <div className="col s4">
//         GIT :
//     </div>
//     <div className="col">
//         <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
//     </div>
// </div>