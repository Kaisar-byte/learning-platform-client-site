import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Features = () => {
	return (
		<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
			<div className="text-left">
				<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">
					Learn, Code and Build
				</h2>
				<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
					To build up a career in this platform follow this three word
				</p>
			</div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-left">
				<div>
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">
						A whole map of programming zone
					</h3>
					<p className="mt-3 text-lg dark:text-gray-400">
						Programming zone is offering you this under mentioned criteria to
						achive your goal
					</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<AiOutlineCheck
										size={"24px"}
										className="font-bold"
									></AiOutlineCheck>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
									Perfect Learning
								</h4>
								<p className="mt-2 dark:text-gray-400">
									Offering you a perfect learning environment to build your
									career without your desire
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<AiOutlineCheck
										size={"24px"}
										className="font-bold"
									></AiOutlineCheck>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
									Solution Bank
								</h4>
								<p className="mt-2 dark:text-gray-400">
									This is a special intensive care unit to work for those whos
									are expecting better acheivement then your desire and to take
									extra supporting tool to make his learning more perfect
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<AiOutlineCheck
										size={"24px"}
										className="font-bold"
									></AiOutlineCheck>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
									Review Session
								</h4>
								<p className="mt-2 dark:text-gray-400">
									This is unit is working for the learner to build a person for
									any viva voce for giant and big company employee.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div aria-hidden="true" className="mt-10 lg:mt-0">
					<img
						src="https://thumbs.dreamstime.com/b/facility-management-mind-map-flowchart-marker-business-concept-presentations-reports-facility-management-mind-map-198579094.jpg"
						alt=""
						className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default Features;
