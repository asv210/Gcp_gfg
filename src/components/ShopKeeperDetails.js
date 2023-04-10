import React from "react";

function ShopKeeperDetails() {

    const onSubmit=()=>{
        window.location='/Adminpage'
    }
    return (<>
        <div className="box">
            <input type="text" placeholder="Enter shop name" />
            <input type="text" placeholder="Adress" />
            <input type="text" placeholder="pincode" />
            <input type="text" placeholder="Mobile number" />
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Password" />
            <button className="btn" onClick={onSubmit}>Submit</button>
        </div>
    </>)
}

export default ShopKeeperDetails;