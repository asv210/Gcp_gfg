import React from 'react'
import styles from "./style.module.css"
const ShopsNearMe = () => {
      return (
            <>
                  <section className={styles.leftContainer}>
                        <ul className={styles.menus}>
                              <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'black' }} href="/storeLogin">Login</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'black' }} href="/shopOnline">Shop Online</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'black' }} href="/nearShops">Shops Near me</a>
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
