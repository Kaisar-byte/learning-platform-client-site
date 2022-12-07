import React from "react";

const Course = ({ course }) => {
	const { courseName, courseImg, courseDuration } = course;
	return (
		<div className="w-70 h-80 m-6">
			<div className="flex-col justify-items-center align-middle content-center text-center shadow-md shadow-pink-400 border-2 border-orange-500 rounded">
				<div className="rounded-tr-sm rounded-tl-sm">
					<img src={courseImg} className="h-48 w-80" alt="" />
				</div>
				<div className="grid grid-cols-1 content-between bg-red-300 h-20">
					<h2 className="text-3xl text-center">{courseName}</h2>
					<div className="h-7 grid grid-cols-2 content-between gap-2 text-white bg-orange-400">
						<p className="text-md">Instructor: John</p>
						<p className="text-md">Duration: {courseDuration}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
