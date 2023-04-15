import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
const ShopsNearMe = () => {
  const [dat, setData] = useState([]);
  const pi = localStorage.getItem("pincode");
  const func = async () => {
    // e.preventDefault();

    const { data } = await axios.post(
      "http://35.192.98.172/api/getskbypin/?pin=" + pi
    );
    // .then((res) => {
    // const data1 = res.data;
    // console.log(res.data);
    // const data = await res.data;

    if (data.length > 0) {
      setData([data]);
      console.log(dat);
    } else {
    }
    // // console.log(res.data);
    // setData(res.data);
    // console.log(dat);

    // .then((res) => {
    //   setData([...data, res.data]);
    //   console.log(data);
    // });
  };
  useEffect(() => {
    func();
  }, [pi]);
  return (
    <>
      <section className={styles.leftContainer}>
        <ul className={styles.menus}>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/storeLogin"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/shopOnline"
            >
              Shop Online
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ color: "black" }}
              to="/nearShops"
            >
              Shops Near me
            </NavLink>
          </li>
        </ul>
      </section>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "400",
          color: "black",
        }}
      >
        Shops near me
      </h1>

      {dat.length > 0 ? (
        <div className={styles.rightContainer}>
          {dat[0].map((item) => {
            return (
              <div className="product-display-two">
                <div>{item?.ShopName}</div>
                <div>{item?.address}</div>
                <div>{item?.mobile_no}</div>
                <div>{item?.email}</div>
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default ShopsNearMe;
