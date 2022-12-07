import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
	const { providerLogin } = useContext(AuthContext);

	const googleProvider = new GoogleAuthProvider();
	const handleGoogleSignIn = () => {
		providerLogin(googleProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className="m-10">
			<form action="" className="flex flex-col gap-3 ">
				<div className="flex flex-col gap-4 w-50 mx-auto p-4 py-10 bg-indigo-400 rounded-lg">
					<div className="mb-4">
						<h2 className="text-3xl text-black-400 font-bold">Log in</h2>
					</div>
					<input
						type="email"
						className="h-12 w-80 rounded-sm "
						placeholder="Email "
					/>
					<input
						type="password"
						className="h-12 w-80 rounded-sm "
						placeholder="Password "
					/>
					<input
						type="submit"
						value="Log in"
						className="text-white text-lg bg-sky-700 py-2 rounded-sm"
					/>
					<p className="text-white">
						Don't Have an account{" "}
						<Link to="/register">
							<strong className="text-black">Register</strong>
						</Link>
					</p>

					<div>
						<p className="text-black-400">Or Log in using </p>

						<div className="flex gap-2 justify-center py-2">
							<FaFacebook className="text-blue-800" size={24} />
							<button onClick={handleGoogleSignIn}>
								<FcGoogle size={24} />
							</button>
							<FaGithub size={24} />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
