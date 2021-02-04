import React from "react";
function Info(props) {
    return (
        <>
            <div>
                <h1>Student Information</h1>
                <div>
                    <p>Name : {props.sname} </p>
                    <p>Rollno : {props.srno} </p>
                    <p>div : {props.sdiv} </p>
                    <p>city : {props.scity} </p>
                </div>
                
            </div>
        </>
    )
};

export default Info;