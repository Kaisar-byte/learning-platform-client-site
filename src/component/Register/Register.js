import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
	const { createUser, updateUserProfiles, verifyEmail } =
		useContext(AuthContext);
	const [error, setError] = useState("");
	const [accepted, setAccepted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError("");
				form.reset();
				handleUpdateUsersProfile(name, photoURL);
				handleEmailVerification();
				toast.success("Please verify your mail first");
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};

	const handleEmailVerification = () => {
		verifyEmail()
			.then(() => {})
			.catch((error) => console.log(error));
	};
	const handleUpdateUsersProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfiles(profile)
			.then(() => {})
			.catch((error) => console.error(error));
	};

	return (
		<div className="m-8">
			<form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
				<div className="flex flex-col gap-4 w-50 mx-auto rounded-md p-4 py-10 bg-indigo-400">
					<div className="mb-4">
						<h2 className="text-3xl text-black-400 font-bold">Register</h2>
					</div>
					<input
						type="text"
						name="name"
						className="h-12 w-80 rounded-sm border-gray-400 px-2"
						placeholder="Full Name "
					/>
					<input
						type="text"
						name="photoURL"
						className="h-12 w-80 rounded-sm border-gray-400 px-2"
						placeholder="Photo URL "
					/>
					<input
						type="email"
						className="h-12 w-80 rounded-sm border-gray-400 px-2"
						placeholder="Email "
						name="email"
						required
					/>
					<input
						type="password"
						className="h-12 w-80 rounded-sm border-gray-400 px-2"
						placeholder="Password "
						name="password"
						required
					/>

					<button
						type="submit"
						className="text-white text-lg bg-sky-700 py-2 rounded-sm"
					>
						Register
					</button>

					<p className="text-white">
						Have a account{" "}
						<Link to="/login">
							<strong className="text-gray-400">Login</strong>
						</Link>
					</p>
				</div>
				<div>
					<p className="text-red-600 text-md">{error}</p>
				</div>
			</form>
		</div>
	);
};

export default Register;
