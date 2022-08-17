import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
	const [isErr, setErr] = useState(false);
	const handelLoginSubmit = (event) => {
		event.preventDefault();
		const data = { email: event.target[0].value };
		axios
			.post("http://localhost:8080/getEmail", data)
			.then((res) => {
				if (res.data === "matched") {
					setErr(false);
					props.states.setLogin(false);
				} else {
					setErr(true);
					props.states.setLogin(true);
				}
			})
			.then((err) => {
				console.log(err);
			});
	};
	return (
		<div className="box login">
			<span>Login</span>
			<form onSubmit={handelLoginSubmit} className="login-form">
				<div className="input">
					<input type="email" placeholder="Email" />
				</div>
				<div className="buttons">
					<input type="submit" value="Login" />
				</div>
				{isErr === true ? (
					<div>
						<span style={{ color: "red" }}>
							Email not present in DB
						</span>
						<span>kindly contact your admin</span>
					</div>
				) : (
					""
				)}
			</form>
		</div>
	);
};

export default Login;
