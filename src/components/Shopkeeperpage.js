import { React, useState, useEffect } from "react";
import Productdetails from "./Productdetails";
import axios from "axios";
function Shopkeeperpage() {
  const [dat, setData] = useState([]);
  const func = async () => {
    // e.preventDefault();
    const emo = localStorage.getItem("email");
    const { data } = await axios.post(
      "http://35.192.98.172/api/getallproduct/?email=" + emo
    );
    // .then((res) => {
    // const data1 = res.data;
    // console.log(res.data);
    // const data = await res.data;
    if (data.length > 0) {
      setData([data]);
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
  }, []);
  const addDetails = () => {
    window.location = "/AddProduct";
  };
  return (
    <>
      <nav className="on-top"  style={{ fontFamily: 'Montserrat Alternates' }}>
        <button className="admin-btn" onClick={addDetails}>
          Add Products
        </button>
        <button className="admin-btn"
          onClick={() => {
            localStorage.removeItem("email");
            window.location = "/";
          }}
        >
          Log Out
        </button>
      </nav>
      <div className="product1-display"  style={{ fontFamily: 'Montserrat Alternates' }}>
        <div>Product name</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Type</div>
      </div>
      <div
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          fontFamily: 'Montserrat Alternates'
        }}
      >
        {dat.length > 0 ? (
          <div>
            {dat[0].map((item) => {
              return <Productdetails item={item} />;
            })}
          </div>
        ) : (
          <div className="text-center">Data Loading</div>
        )}
      </div>
    </>
  );
}

export default Shopkeeperpage;
