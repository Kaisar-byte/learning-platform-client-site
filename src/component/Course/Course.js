import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const Course = ({ course }) => {
	const { courseName, courseImg, courseDuration } = course;
	return (
		<div className="w-90 h-90 card card-side bg-base-100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-xl">
			<div className="flex w-1/2">
				<figure>
					<img
						src={courseImg}
						style={{ height: "150px" }}
						className="max-w-full rounded-l-lg"
						alt="Movie"
					/>
				</figure>
			</div>
			<div className="flex-col justify-between align-center text-center">
				<div className="card-body flex flex-col">
					<h2 className="text-4xl mt-4 text-center text-gray-50 font-serif">
						{courseName}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Course;
