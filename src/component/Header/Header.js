import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
	const { user, LogOut } = useContext(AuthContext);

	const handleLogOut = () => {
		LogOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
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

				<div className="flex gap-3 justify-center items-center">
					<nav className="flex gap-x-10">
						<Link to="/courses">Courses</Link>
						<Link>FAQ</Link>
						<Link>Blog</Link>
						<Link>About Us</Link>
					</nav>

					<nav className="flex gap-3 justify-center items-center">
						{user?.uid ? (
							<>
								<span>{user?.displayName}</span>
								<button
									className="btn btn-outline btn-accent"
									onClick={handleLogOut}
								>
									Log out
								</button>
							</>
						) : (
							<>
								<Link to="/login">Log in</Link>
								<Link to="/register">Register</Link>
							</>
						)}
					</nav>
					<nav>
						{user?.photoURL ? (
							<img
								className="rounded-full w-10 justify-center items-center"
								src={user?.photoURL}
								alt=""
								style={{ height: "40px" }}
							/>
						) : (
							<FaUserAlt></FaUserAlt>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
