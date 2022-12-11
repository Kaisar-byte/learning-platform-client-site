import React from "react";
import {
	FaFacebook,
	FaGithubAlt,
	FaGoogleDrive,
	FaTwitter,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
	const courses = useLoaderData();
	const {
		courseImg,
		courseName,
		courseDuration,
		courseDetails,
		courseTitle,
		courseWriter,
		writerThumbnail,
	} = courses;

	return (
		<article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
			<div className="w-full mx-auto space-y-4 text-center">
				<img
					src={courseImg}
					alt=""
					className="w-full h-60 sm:h-96 dark:bg-gray-500"
				/>
				<p className="text-xs font-semibold tracking-wider uppercase">
					{courseName}
				</p>
				<h1 className="text-4xl font-bold leading-tight md:text-5xl">
					{courseTitle}
				</h1>
			</div>
			<div className="dark:text-gray-100">
				<p className="text-justify">{courseDetails}</p>
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
