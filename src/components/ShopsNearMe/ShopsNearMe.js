import React from 'react'
import styles from "./style.module.css"
import { NavLink } from 'react-router-dom';

const ShopsNearMe = () => {
      return (
            <>
                  <section className={styles.leftContainer}>
                        <ul className={styles.menus}>
                              <li className="nav-item">
                                    <NavLink className="nav-link" style={{ color: 'black' }} to="/storeLogin">Login</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link" style={{ color: 'black' }} to="/shopOnline">Shop Online</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link" style={{ color: 'black' }} to="/nearShops">Shops Near me</NavLink>
                              </li>
                        </ul>
                  </section>
                  <section className={styles.rightContainer}>
                        <h1 style={{ textAlign: "center", fontWeight: "400", color: 'black' }}>Shops near me</h1>
                  </section>
            </>
      )
}

export default ShopsNearMe
