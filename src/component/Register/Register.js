import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="m-8">
			<form action="" className="flex flex-col gap-3 ">
				<div className="flex flex-col gap-4 w-50 mx-auto rounded-md p-4 py-10 bg-indigo-400">
					<div className="mb-4">
						<h2 className="text-3xl text-black-400 font-bold">Register</h2>
					</div>
					<input
						type="text"
						className="h-12 w-80 rounded-sm border-gray-400"
						placeholder="Full Name "
					/>
					<input
						type="text"
						className="h-12 w-80 rounded-sm border-gray-400"
						placeholder="Photo URL "
					/>
					<input
						type="email"
						className="h-12 w-80 rounded-sm border-gray-400"
						placeholder="Email "
					/>
					<input
						type="password"
						className="h-12 w-80 rounded-sm border-gray-400"
						placeholder="Password "
					/>
					<input
						type="submit"
						value="Register"
						className="text-white text-lg bg-sky-700 py-2 rounded-sm"
					/>
					<p className="text-white">
						Have a account{" "}
						<Link to="/login">
							<strong className="text-gray-400">Login</strong>
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Register;
