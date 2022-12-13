import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
	const { providerLogin, LogIn } = useContext(AuthContext);
	const [error, setError] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

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
	const githubProvider = new GithubAuthProvider();

	const handleGitHubSignIn = () => {
		providerLogin(githubProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.error(error));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		LogIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError("/");
				if (user.emailVerified) {
					navigate(from, { replace: true });
				} else {
					toast.error("Please verify your mail first");
				}
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};

	return (
		<div className="m-10">
			<form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
				<div className="flex flex-col gap-4 w-50 mx-auto p-4 py-10 bg-indigo-400 rounded-lg">
					<div className="mb-4">
						<h2 className="text-3xl text-black-400 font-bold">Log in</h2>
					</div>
					<input
						type="email"
						name="email"
						className="h-12 w-80 rounded-sm px-2"
						placeholder="Email "
						required
					/>
					<input
						type="password"
						name="password"
						className="h-12 w-80 rounded-sm px-2"
						placeholder="Password "
						required
					/>
					<input
						type="submit"
						value="Log in"
						className="text-white text-lg bg-sky-700 py-2 rounded-sm px-2"
					/>

					<div>
						<p className="text-black-400">Or Log in using </p>

						<div className="flex gap-2 justify-center py-2 mb-4">
							<button onClick={handleGoogleSignIn}>
								<FcGoogle size={24} />
							</button>
							<button onClick={handleGitHubSignIn}>
								<FaGithub size={24} />
							</button>
						</div>
						<p className="text-white">
							Don't Have an account{" "}
							<Link to="/register">
								<strong className="text-black">Register</strong>
							</Link>
						</p>
					</div>
				</div>
			</form>
			<div>
				<p className="text-red-600">{error}</p>
			</div>
		</div>
	);
};

export default Login;
