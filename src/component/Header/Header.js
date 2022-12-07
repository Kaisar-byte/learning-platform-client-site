import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div className="w-11/12 mx-auto">
			<div className="flex justify-between py-3">
				<nav className="text-2xl">
					<Link to="/">
						<span className="font-mono border-2 rounded px-2 text-gray-500 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-500 ">
							Programing
						</span>
						Zone
					</Link>
				</nav>

				<div className="flex gap-3">
					<nav className="flex gap-x-10">
						<Link to="/courses">Courses</Link>
						<Link>FAQ</Link>
						<Link>Blog</Link>
						<Link>About Us</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</nav>

					<nav className="text-red-400">{user?.displayName}</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
