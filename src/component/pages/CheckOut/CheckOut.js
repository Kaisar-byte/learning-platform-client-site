import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
	const course = useLoaderData();

	const { courseName, courseDetails } = course;
	console.log(course);
	return (
		<div className="flex flex-col bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mt-8 mb-6 mx-auto max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
			<h2 className="text-center text-4xl text-orange-400">{courseName}</h2>
			<p className="flex-1 dark:text-gray-400 text-justify">
				{courseDetails.split("", 200)}
			</p>
		</div>
	);
};

export default CheckOut;
