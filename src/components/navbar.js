import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ fontSize: "1.2rem" }}>
            <div className="container-fluid">
                {/* <NavLink className="navbar-brand mx-3" to="/">
                    <img src={photo} alt="" height={40} width={40} style={{ borderRadius: '100px' }} />
                </NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" to="/store">Store</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/weather" className='nav-link'>Weather</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/contact" className='nav-link'>Contact us</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/about" className='nav-link'>About us</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/Adminlogin" className='nav-link'>Admin</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/ShopKeeperLogin" className='nav-link'>Shopkeeper</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar