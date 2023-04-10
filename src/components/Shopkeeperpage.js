import {React,useState} from "react";
import Productdetails from "./Productdetails";

function Shopkeeperpage(){
    
    const addDetails=()=>{
        window.location='/AddProduct';
    }
    return(<>
    <nav className="on-top">
        <button className="admin-btn" onClick={addDetails}>Add Products</button>
        <Productdetails/>
    </nav>
    </>)
}

export default Shopkeeperpage;