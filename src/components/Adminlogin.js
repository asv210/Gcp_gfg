import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Adminpage from "./Adminpage";



function Adminlogin() {
    const navigate = useNavigate()
    const onSubmit = () => {
        window.location='/Adminpage';
    }
    return (
        <>
        
            <div className="box">
                <input type="text" placeholder="Email Id" />
                <input type="text" placeholder="Password" />
                <button className="btn" onClick={onSubmit}>Login</button>
            </div>
        </>
    )
}

export default Adminlogin