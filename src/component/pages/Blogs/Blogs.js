import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
	return (
		<div className="dark:bg-gray-800 mt-10 mb-10 dark:text-gray-100 flex flex-col gap-6">
			<div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="flex items-center justify-between">
					<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>

					<Link className="bg-gray-600 p-2 rounded-md">Javascript</Link>
				</div>
				<div className="mt-3">
					<Link className="text-2xl font-bold hover:underline">
						What is cors?
					</Link>
					<p className="mt-2">
						Cross-Origin Resource Sharing (CORS) is an HTTP-header based
						mechanism that allows a server to indicate any origins (domain,
						scheme, or port) other than its own from which a browser should
						permit loading resources. CORS also relies on a mechanism by which
						browsers make a "preflight" request to the server hosting the
						cross-origin resource, in order to check that the server will permit
						the actual request. In that preflight, the browser sends headers
						that indicate the HTTP method and headers that will be used in the
						actual request.
					</p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<Link className="hover:underline dark:text-violet-400">
						Read more
					</Link>
					<div>
						<Link className="flex items-center">
							<img
								src="https://source.unsplash.com/50x50/?portrait"
								alt="avatar"
								className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
							/>
							<span className="hover:underline dark:text-gray-400">
								Leroy Jenkins
							</span>
						</Link>
					</div>
				</div>
			</div>
			{/* Question 2 */}
			<div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="flex items-center justify-between">
					<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
					<Link className="bg-gray-600 p-2 rounded-md">Express JS</Link>
				</div>
				<div className="mt-3">
					<Link className="text-2xl font-bold hover:underline">
						Why are you using firebase? What other options do you have to
						implement authentication?
					</Link>
					<p className="mt-2">
						The Firebase Realtime Database lets you build rich, collaborative
						applications by allowing secure access to the database directly from
						client-side code. Data is persisted locally, and even while offline,
						realtime events continue to fire, giving the end user a responsive
						experience. I have implemented GitHub and Google login
						authentication into this project
					</p>
					<p></p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<Link className="hover:underline dark:text-violet-400">
						Read more
					</Link>
					<div>
						<Link href="#" className="flex items-center">
							<img
								src="https://source.unsplash.com/50x50/?portrait"
								alt="avatar"
								className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
							/>
							<span className="hover:underline dark:text-gray-400">
								Peris Donald
							</span>
						</Link>
					</div>
				</div>
			</div>
			{/* Question 3 */}
			<div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="flex items-center justify-between">
					<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>

					<Link className="bg-gray-600 p-2 rounded-md">React JS</Link>
				</div>
				<div className="mt-3">
					<Link className="text-2xl font-bold hover:underline">
						How does the private route work?
					</Link>
					<p className="mt-2">
						The react private route component renders child components (
						children ) if the user is logged in. If not logged in the user is
						redirected to the /login page with the return url passed in the
						location state property.
					</p>
					<p></p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<Link className="hover:underline dark:text-violet-400">
						Read more
					</Link>
					<div>
						<Link className="flex items-center">
							<img
								src="https://source.unsplash.com/50x50/?portrait"
								alt="avatar"
								className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
							/>
							<span className="hover:underline dark:text-gray-400">
								Peris Donald
							</span>
						</Link>
					</div>
				</div>
			</div>
			{/* Question 4 */}
			<div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="flex items-center justify-between">
					<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>

					<Link className="bg-gray-600 p-2 rounded-md">Node JS</Link>
				</div>
				<div className="mt-3">
					<Link className="text-2xl font-bold hover:underline">
						What is Node? How does Node work?
					</Link>
					<p className="mt-2">
						Node. js is a JavaScript runtime environment that achieves low
						latency and high throughput by taking a “non-blocking” approach to
						serving requests. In other words, Node. js wastes no time or
						resources on waiting for I/O requests to return.
					</p>
					<p></p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<Link className="hover:underline dark:text-violet-400">
						Read more
					</Link>
					<div>
						<Link className="flex items-center">
							<img
								src="https://source.unsplash.com/50x50/?portrait"
								alt="avatar"
								className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
							/>
							<span className="hover:underline dark:text-gray-400">
								Peris Donald
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
