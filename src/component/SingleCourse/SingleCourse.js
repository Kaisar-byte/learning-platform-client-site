import React from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import {
	FaFacebook,
	FaGithubAlt,
	FaGoogleDrive,
	FaTwitter,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
	const ref = useRef();

	const courses = useLoaderData();

	const { id, courseImg, courseDetails, courseTitle, courseWriter } = courses;

	return (
		<article
			ref={ref}
			className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50"
		>
			<div className="flex justify-end">
				<ReactToPrint
					trigger={() => (
						<button className="bg-orange-400 text-white px-4 rounded-md">
							Print
						</button>
					)}
					content={() => ref.current}
				></ReactToPrint>
			</div>
			<div className="w-full mx-auto space-y-4 text-center">
				<img
					src={courseImg}
					alt=""
					className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-md"
				/>

				<h1 className="text-4xl font-bold leading-tight md:text-5xl">
					{courseTitle}
				</h1>
			</div>
			<div className="dark:text-gray-100 flex flex-col gap-3">
				<p className="text-justify">{courseDetails}</p>

				<Link to={`/checkout/${id}`}>
					<button className="mt-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-2 text-xl text-white py-1 rounded-md">
						{"Get premium access"}
					</button>
				</Link>
			</div>

			<div className="pt-12 border-t dark:border-gray-700">
				<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
					<img
						src="https://source.unsplash.com/75x75/?portrait"
						alt=""
						className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
					/>
					<div className="flex flex-col">
						<h4 className="text-lg font-semibold text-left">
							Written By: {courseWriter}
						</h4>
						<p className="dark:text-gray-400 text-justify">
							{courseDetails.split("", 180)}
						</p>
					</div>
				</div>
				<div className="flex justify-center pt-4 space-x-4 align-center">
					<FaGithubAlt></FaGithubAlt>
					<FaGoogleDrive></FaGoogleDrive>
					<FaFacebook></FaFacebook>
					<FaTwitter></FaTwitter>
				</div>
			</div>
		</article>
	);
};

export default SingleCourse;
