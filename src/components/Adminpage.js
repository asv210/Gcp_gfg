import {React,useState} from "react";
import Shopkeeperdisplay from "./Shopkeeperdisplay";

function Adminpage(){
    
    const addDetails=()=>{
        window.location='/ShopKeeperDetails';
    }
    return(<>
    <nav className="on-top">
        <button className="admin-btn" onClick={addDetails}>Add shopkeeper</button>
        <Shopkeeperdisplay/>
    </nav>
    </>)
}

export default Adminpage;