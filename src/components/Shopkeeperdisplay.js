import React, { useState, useEffect } from "react";
import axios from "axios";
const Shopkeeperdisplay = ({ item }) => {
  const edit = () => {
    localStorage.setItem("skId", item?._id);
    // console.log(localStorage.getItem("productId"));
    window.location = "/EditShopkeeper";
  };
  const del = async () => {
    await axios
      .delete("http://35.192.98.172/api/deletesk/?_id=" + item?._id)
      .then((res) => {
        if (res.status === 204) {
          // console.log(res.data);

          alert("successfully delete");
          window.location.reload(true);
        } else {
          window.location.reload(true);
        }
      });
  };
  return (
    <>
      <div className="product-display-two">
        <div>{item?.ShopName}</div>
        <div>{item?.address}</div>
        <div>{item?.pincode}</div>
        <div>{item?.mobile_no}</div>
        <div>{item?.email}</div>
        <div className="btn-s" style={{ backgroundColor: "transparent" }}>
          <button className="edit" onClick={edit}>
            Edit
          </button>
          <button className="delete" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Shopkeeperdisplay;
