import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { SiSpeedtest, SiLaunchpad, SiDatabricks } from "react-icons/si";
const Feature2 = () => {
	return (
		<section className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto flex flex-col p-6">
				<h2 className="py-4 text-3xl font-bold text-center">
					Site Development Process
				</h2>
				<div className="divide-y divide-gray-700">
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<SiDatabricks
								size={"70px"}
								className="text-bold text-orange-400"
							></SiDatabricks>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xs tracking-wider uppercase dark:text-violet-400">
								Step 1 -
							</span>
							<span className="text-xl font-bold md:text-2xl">
								Information Gathering, Planning and Gathering
							</span>
							<span className="mt-4 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								facilis, voluptates error alias dolorem praesentium sit soluta
								iure incidunt labore explicabo eaque, quia architecto veritatis
								dolores, enim cons equatur nihil ipsum.
							</span>
						</div>
					</div>
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<BsCodeSlash
								size={"70px"}
								className="text-bold text-orange-400"
							></BsCodeSlash>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xs tracking-wider uppercase dark:text-violet-400">
								Step 2 -
							</span>
							<span className="text-xl font-bold md:text-2xl">
								Code the Sites
							</span>
							<span className="mt-4 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								facilis, voluptates error alias dolorem praesentium sit soluta
								iure incidunt labore explicabo eaque, quia architecto veritatis
								dolores, enim cons equatur nihil ipsum.
							</span>
						</div>
					</div>
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<SiSpeedtest
								size={"70px"}
								className="text-bold text-orange-400"
							></SiSpeedtest>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xs tracking-wider uppercase dark:text-violet-400">
								Step 3
							</span>
							<span className="text-xl font-bold md:text-2xl">
								Testing, Review and Launch,
							</span>
							<span className="mt-4 dark:bg-gray-800 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								facilis, voluptates error alias dolorem praesentium sit soluta
								iure incidunt labore explicabo eaque, quia architecto veritatis
								dolores, enim cons equatur nihil ipsum.
							</span>
						</div>
					</div>
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<SiLaunchpad
								size={"70px"}
								className="text-bold text-orange-400"
							></SiLaunchpad>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xs tracking-wider uppercase dark:text-violet-400">
								Step 4
							</span>
							<span className="text-xl font-bold md:text-2xl">Maintenance</span>
							<span className="mt-4 dark:text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								facilis, voluptates error alias dolorem praesentium sit soluta
								iure incidunt labore explicabo eaque, quia architecto veritatis
								dolores, enim cons equatur nihil ipsum.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature2;
