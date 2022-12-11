import React from "react";
import { Link } from "react-router-dom";
import Feature2 from "../Feature2/Feature2";
import Features from "../Features/Features";

const Home = () => {
	return (
		<div>
			<section className="bg-gradient-to-b from-purple-800 to-blue-600">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src="https://mambaui.com/assets/svg/Business_SVG.svg"
							alt=""
							className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
					<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">
							Career Building
							<span className="text-violet-400 pl-2">Courses</span> at Your Home
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							Programmers Zone is a place for everyone passionate about
							programming and designing. Our carefully designed programs and
							courses help in learning to code from scratch to master. This
							courses will change your passionate and life.
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								to="/courses"
								className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white"
							>
								Our Courses
							</Link>
							<Link
								to="/contact"
								className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Feature2></Feature2>
			</section>
			<section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
				<Features></Features>
			</section>
		</div>
	);
};

export default Home;
