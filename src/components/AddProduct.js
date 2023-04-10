import React from "react";

function AddProduct() {

    const onSubmit = () => {
        window.location = '/Shopkeeperpage'
    }

    return (<>
        <div className="box">
            
            <input type="text" placeholder="Enter product name" />
            <input type="text" placeholder="enter Quantity" />
            <input type="text" placeholder="price per unit Kg" />
            <select name="type" id="type">
                <option value="Seeds">Seeds</option>
                <option value="Fertilizer">FertiliZers</option>
                <option value="Tools">Tools</option>
            
            </select>
            <button className="btn" onClick={onSubmit}>Submit</button>
            
        </div>
    </>)
}

export default AddProduct;