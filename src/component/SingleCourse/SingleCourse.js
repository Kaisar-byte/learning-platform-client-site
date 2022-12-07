import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
	const courses = useLoaderData();
	const { courseImg, courseName, courseDuration, courseDetails } = courses;

	return (
		<div className="w-4/5 mx-auto m-12 border drop-shadow-2xl shadow-gray-800">
			<div className="text-left border p-5 leading-7 text-lg font-normal bg-orange-300">
				<div className="flex justify-between content-start">
					<div className="flex flex-col justify-end ">
						<h2>
							<strong>Course: </strong>
							{courseName}
						</h2>
						<p>
							<strong>Duration: </strong> {courseDuration}
						</p>
					</div>
					<div className="w-60 h-60 bg-pink-300 rounded-lg">
						<img src={courseImg} alt="" className="rounded-xl p-2" />
					</div>
				</div>
			</div>
			<div className="bg-purple-400">
				<p className="text-justify p-4">
					<strong>Course Details: </strong>
					{courseDetails}
				</p>
			</div>
		</div>
	);
};

export default SingleCourse;
