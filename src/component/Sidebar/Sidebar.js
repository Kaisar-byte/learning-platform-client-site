import React from "react";

const Sidebar = ({ course }) => {
	const { courseName } = course;
	return (
		<div className="flex flex-col text-md border py-2 hover:bg-red-300 text-white">
			{courseName}
		</div>
	);
};

export default Sidebar;
