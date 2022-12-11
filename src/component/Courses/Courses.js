import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/courses")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<div className="flex">
			<div className="w-1/5 bg-red-300">
				{courses.map((course) => (
					<Link to={`/courses/${course.id}`}>
						<Sidebar course={course}>
							<Course></Course>
						</Sidebar>
					</Link>
				))}
			</div>
			<div className="w-4/5 bg-purple-200 grid grid-cols-2 justify-center content-center px-8 py-8 gap-6">
				{courses.map((course) => (
					<Link to={`/courses/${course.id}`}>
						<Course course={course}></Course>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Courses;
