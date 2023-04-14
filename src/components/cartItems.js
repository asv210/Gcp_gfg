import React, { useEffect, useState } from "react";
import Cart from "./cart";
import axios from "axios";
const CartItems = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const [productData, setProductData] = useState({
    name: localStorage.getItem("name"),
    mobile: localStorage.getItem("mobile"),
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const func = async () => {
    const { data } = await axios.post(
      "http://localhost:8000/api/farmerlogin/",
      productData
    );
    console.log(data);
    if (data.cart.length > 0) {
      setProductInfo([data.cart]);
      console.log("prod. infod", productInfo);
    } else {
    }
  };

  useEffect(() => {
    func();
  }, [productData]);
  return (
    <>
      {productInfo.map != undefined ? (
        <>
          <h2 style={{ alignSelf: 'flex-end', fontFamily: 'Montserrat Alternates' }}>Total price : {totalPrice}</h2>
          <div style={{ gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid', justifySelf: 'center', paddingLeft: '4rem' }}>
            {productInfo[0]?.map((item) => {
              return (
                <Cart
                  item={item}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default CartItems;
