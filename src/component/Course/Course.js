import React from "react";
const Course = ({ course }) => {
	const { courseName, courseImg, courseDuration, courseFee } = course;
	return (
		<div className="w-90 h-90 card card-side bg-gradient-to-r from-sky-400 to-blue-500">
			<div className="flex w-1/2 p-2">
				<img className="mask mask-circle" src={courseImg} alt="" />
			</div>
			<div className="flex gap-1 flex-col justify-between align-center text-center">
				<div className="card-body flex flex-col text-left">
					<h2 className="text-4xl mt-4  text-gray-150 font-mono">
						{courseName}
					</h2>
					<div className="flex ">
						<p>
							Course Fee: {courseFee}
							<span>BDT</span>
						</p>
					</div>
					<div className="flex">
						<p>
							Duration: {courseDuration} <span>Days</span>
						</p>
					</div>
					<button className="bg-orange-300 mx-5 mt-4 py-2 text-gray-140 rounded-md">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Course;
