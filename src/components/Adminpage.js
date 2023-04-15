import { React, useState, useEffect } from "react";
import Shopkeeperdisplay from "./Shopkeeperdisplay";
import axios from "axios";
function Adminpage() {
  const [dat, setData] = useState([]);
  const func = async () => {
    // e.preventDefault();

    const { data } = await axios.get("http://35.192.98.172/api/getallsk/");
    // .then((res) => {
    // const data1 = res.data;
    // console.log(res.data);
    // const data = await res.data;
    if (data.length > 0) {
      setData([data]);
      console.log(dat[0]);
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
    window.location = "/ShopKeeperDetails";
  };
  return (
    <>
      <nav className="on-top" style={{ fontFamily: 'Montserrat Alternates', display: 'flex', justifyContent: 'right' }}>
        <button className="admin-btn" onClick={addDetails}>
          Add shopkeeper
        </button>
        <button className="admin-btn"
          onClick={() => {
            localStorage.removeItem("email");
            window.location = "/";
          }}>
          Logout
        </button>
      </nav>
      <div className="product-display" style={{ fontFamily: 'Montserrat Alternates' }}>
        <div>Shop name</div>
        <div>Address</div>
        <div>Pincode</div>
        <div>Mobile No.</div>
        <div>Email</div>
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
              return <Shopkeeperdisplay item={item} />;

              {
                /* return <h2>htfyt</h2>; */
              }
            })}
          </div>
        ) : (
          <div className="text-center" style={{ fontFamily: 'Montserrat Alternates' }}>Data Loading</div>
        )}
      </div>
    </>
  );
}

export default Adminpage;
