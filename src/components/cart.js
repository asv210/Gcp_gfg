import React, { useState, useEffect } from "react";
import styles from "./ShopOnline/styles.module.css";
import { Button } from "antd";
import pic from "../images/seeds.jpg";
import pic1 from "../images/fertilizer.jpg";
import pic2 from "../images/tool.png";

import axios from "axios";
function Cart({ item }) {
  const [id, setData] = useState();
  const func = async () => {
    console.log(item?.productId);
    const { data } = await axios.post(
      "http://35.192.98.172/api/getprodbyid/?id=" + item?.productId
    );

    setData(data);
  };
  useEffect(() => {
    func();
  }, []);

  const [first, setfirst] = useState({
    name: localStorage.getItem("name"),
    ide: item?.productId,
  });
  const remove = async (e) => {
    e.preventDefault();
    await axios
      .post("http://35.192.98.172/api/deletecart/", first)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          window.location.reload(true);
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };
  const buy = () => {
    remove();
    window.location();
  };
  return (
    <>
      <div className={styles.parentContainer} id="Seeds">
        <div
          className="card"
          style={{ width: "40vh", height: "65vh", margin: "5vh" }}
        >
          <img
            className="card-img-top"
            src={id?.prodType === 'Seed' ? pic : id?.prodType === 'Fertilizer' ? pic1 : pic2}
            alt="Card image cap"
            style={{ width: "100%", height: "35%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{id?.productName}</h5>
            <h5 className="card-title">{id?.type}</h5>
            <p className="card-text">
              <p>Rs. {id?.price} /-</p>
            </p>
            <div className="card-footer" style={{ height: '30%' }}>
              <Button
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Buy Now
              </Button>
              <Button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={remove}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
