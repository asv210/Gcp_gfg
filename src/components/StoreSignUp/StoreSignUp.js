import React, { useState } from 'react'
import styles from './style.module.css'
import axios from 'axios';

function StoreSignUp() {
	const [data, setData] = useState({
		name: "",
		mobile: "",
		address: "",
		pincode: "",
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		console.log("=-=-=-=-=-=-=-=-=-=-===-=-=-==-=-=")

		console.log(input)
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		console.log("submit =-=-=-=-=-=-=-=-=-=-===-=-=-==-=-=")

		e.preventDefault();
		try {

			const url = "http://localhost:5000/api/auth/Register";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			setMsg("Message Sent");
			window.location = "/Login";


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
				<h1 style={{ textAlign: "center", fontWeight: "400", color: 'black' }}>Sign up</h1>
				<form style={{ padding: "60px" }} onSubmit={handleSubmit}>
					<input
						type="text"
						id='name'
						className={styles.name}
						placeholder='Name'
						name='name'
						onChange={handleChange}
						value={data.name}
						required
					/>
					<br />
					<input
						type="text"
						id='mobNo'
						className={styles.mobNo}
						placeholder='Mobile Number'
						name='mobile'
						onChange={handleChange}
						value={data.mobile}
						required

					/><br />
					<textarea
						type="text"
						id='add'
						className={styles.address}
						placeholder='Your Address'
						name='address'
						onChange={handleChange}
						value={data.address}
						required

					/><br />
					<input
						type="text"
						id='pincode'
						className={styles.pincode}
						placeholder='Pincode'
						name='pincode'
						onChange={handleChange}
						value={data.pincode}
						required

					/><br />
					{error && <div className={styles.error_msg}>{error}</div>}
					{msg && <div className={styles.success_msg}>{msg}</div>}
					<input type="button" id='btn' value="Sign Up" className={styles.btn} /><br />

				</form>
			</section>
		</>
	)
}

export default StoreSignUp;