import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Header = () => {
	const { user, LogOut, dragChecked, setDragChecked } = useContext(AuthContext);

	const handleLogOut = () => {
		LogOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className="w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
			<div className="flex justify-between py-3 w-4/5 mx-auto">
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
						<Link to="/blogs">Blog</Link>
						<Link>About Us</Link>
					</nav>

					<nav className="flex gap-3 justify-center items-center">
						{user?.uid ? (
							<>
								{/* <span>{user?.displayName}</span> */}
								<button
									className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
							<>
								<img
									className="rounded-full w-10 h-10 justify-center items-center"
									id="profile-tooltip"
									src={user?.photoURL}
									alt=""
									style={{ height: "40px" }}
								/>

								<ReactTooltip
									anchorId="profile-tooltip"
									place="bottom"
									content={user?.displayName}
								/>
							</>
						) : (
							<FaUserAlt></FaUserAlt>
						)}
					</nav>
					<DragSwitch
						checked={dragChecked}
						onChange={(e) => {
							setDragChecked(e);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
