import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Divider } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
// import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Space } from "antd";
import cart from "../cart";
// import { fertilizers } from '../fertilizersList/fertilizersList';
import axios from "axios";
import pic from "../../images/seeds.jpg";
import pic1 from "../../images/fertilizer.jpg";
import pic2 from "../../images/tool.png";
const ButtonGroup = Button.Group;
function ShopOnline(props) {
  const [seed, setSeed] = useState([
    {},
    //     {
    //       url: "./seeds.jpg",
    //       name: "Wheat Seeds",
    //       price: 200,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./seeds.jpg",
    //       name: "Maize Seeds",
    //       price: 250,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./seeds.jpg",
    //       name: "Barley Seeds",
    //       price: 199,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./seeds.jpg",
    //       name: "Onion Seeds",
    //       price: 250,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./seeds.jpg",
    //       name: "Jowar Seeds",
    //       price: 200,
    //       category: "Seeds",
    //     },
  ]);
  const [fertilizers, setFertilizers] = useState([
    {},
    //     {
    //       url: "./fertilizer.jpg",
    //       name: "Wheat Seeds",
    //       price: 200,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./fertilizer.jpg",
    //       name: "Maize Seeds",
    //       price: 250,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./fertilizer.jpg",
    //       name: "Barley Seeds",
    //       price: 199,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./fertilizer.jpg",
    //       name: "Onion Seeds",
    //       price: 250,
    //       category: "Seeds",
    //     },
    //     {
    //       url: "./fertilizer.jpg",
    //       name: "Jowar Seeds",
    //       price: 200,
    //       category: "Seeds",
    //     },
  ]);
  const [tools, setTools] = useState([]);
  //     {
  //       url: "./tool.png",
  //       name: "Wheat Seeds",
  //       price: 200,
  //       category: "Seeds",
  //     },
  //     {
  //       url: "./tool.png",
  //       name: "Maize Seeds",
  //       price: 250,
  //       category: "Seeds",
  //     },
  //     {
  //       url: "./tool.png",
  //       name: "Barley Seeds",
  //       price: 199,
  //       category: "Seeds",
  //     },
  //     {
  //       url: "./tool.png",
  //       name: "Onion Seeds",
  //       price: 250,
  //       category: "Seeds",
  //     },
  //     {
  //       url: "./tool.png",
  //       name: "Jowar Seeds",
  //       price: 200,
  //       category: "Seeds",
  //     },

  const navigate = useNavigate();
  const [first, setfirst] = useState([]);
  const func = async () => {
    const { data } = await axios.get("http://35.192.98.172/api/allproduct/");
    console.log(data);
    if (data.length > 0) {
      setSeed(data.filter((item) => item.prodType == "Seed"));
      setFertilizers(data.filter((item) => item.prodType == "Fertilizer"));
      setTools(data.filter((item) => item.prodType == "Tool"));
    } else {
    }
  };
  useEffect(() => {
    func();
  }, [first]);
  const abc = () => {
    window.location = "/cartItems";
  };
  //   const [cart, setCart] = useState([]);
  //   // console.log(cart)

  //   const addToCart = (data) => {
  //     // console.log(data)
  //     setCart([...cart, { ...data, quantity: 1 }]);
  //   };
  //   const [count, setCount] = useState(5);
  //   const increase = () => {
  //     setCount(count + 1);
  //   };
  //   const decline = () => {
  //     let newCount = count - 1;
  //     if (newCount < 0) {
  //       newCount = 0;
  //     }
  //     setCount(newCount);
  //   };

  const addToCart = async (par) => {
    const { data } = await axios.post("http://35.192.98.172/api/updatecart/", {
      name: localStorage.getItem("name"),
      id: par,
    });
  };
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
      <section className={styles.rightContainer}>
        <section count={cart.length}>
          <div style={{ flexDirection: "column" }}>
            <nav aria-label="...">
              <ul className="pagination pagination-md">
                <li className="page-item">
                  <a className="page-link" href="#Seeds">
                    Seeds
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#Fertilizers">
                    Fertilizers
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#Tools">
                    Tools
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <NavLink onClick={abc}>Cart</NavLink>
            </div>
          </div>
        </section>
        <Divider />
        <section className="flex">
          <div className={styles.parentContainer} id="Seeds">
            {seed.map((seed, seedIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "50vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{seed.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {seed.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                        onClick={() => addToCart(seed._id)}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className={styles.parentContainer} id="Fertilizers">
            {fertilizers.map((fertilizers, fertilizersIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "60vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic1}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{fertilizers.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {fertilizers.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        onClick={() => addToCart(fertilizers._id)}
                        style={{ width: "100%" }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className={styles.parentContainer} id="Tools">
            {tools.map((tools, toolsIndex) => {
              return (
                <div
                  className="card"
                  style={{ width: "40vh", height: "50vh", margin: "5vh" }}
                >
                  <img
                    className="card-img-top"
                    src={pic2}
                    alt="Card image cap"
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{tools.productName}</h5>
                    <p className="card-text">
                      <p>Rs. {tools.price} /-</p>
                    </p>
                    <div className="card-footer">
                      <Button
                        className="btn btn-primary"
                        onClick={() => addToCart(tools._id)}
                        style={{ width: "100%" }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}

export default ShopOnline;
