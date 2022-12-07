import React from "react";
import { FaCode } from "react-icons/fa";

const Features = () => {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 features flex justify-items-center gap-4 py-3 p-6 border-2 border-blue-200 m-3 rounded-md">
			<div className="feature-icon">
				<div className="bg-red-400 p-8 rounded-full">
					<FaCode className="text-white text-xl"></FaCode>
				</div>
			</div>
			<div className="feature-content text-left ">
				<h2 className="mb-2 pl-3 text-2xl underline text-yellow-200">
					Learn Coding
				</h2>
				<p className="ml-3">
					You must learn to be still in the midst of activity and to be
					vibrantly alive in repose.
				</p>
			</div>
		</div>
	);
};

export default Features;
