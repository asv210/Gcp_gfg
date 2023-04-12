import React, { useState } from 'react'
import styles from './style.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function StoreLogin() {
	const [data, setData] = useState([{ name: "", mobile: "" }]);
	const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		console.log(input)
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
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
				<h1 style={{ textAlign: "center", fontWeight: "400", color: 'black' }}>Login</h1>
				<form style={{ padding: "60px" }} onSubmit={handleSubmit}>
					<input
						type="text"
						id='name'
						className={styles.name}
						placeholder='Name'
						name='name'
						value={data.name}
						required
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						id='mobNo'
						className={styles.mobNo}
						placeholder='Mobile Number'
						name='mobile'
						value={data.mobile}
						required
						onChange={handleChange}
					/><br />
					<input type="button" id='btn' value="Login" className={styles.btn} /><br />
					{error && <div className={styles.error_msg}>{error}</div>}
					<h5>or</h5>
					<h5>Don't have an account?</h5>
					<NavLink to="/StoreSignUp">
						<input type="button" id='btn' value="Sign Up" className={styles.btn} />
					</NavLink>
					<br />

				</form>
			</section>
		</>
	)
}

export default StoreLogin;