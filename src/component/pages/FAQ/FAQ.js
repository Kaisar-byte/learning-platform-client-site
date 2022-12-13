import React from "react";

const FAQ = () => {
	return (
		<section className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container text-left flex flex-col justify-center p-4 mx-auto md:p-8">
				<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
					How it works
				</p>
				<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
					Frequently Asked Questions
				</h2>
				<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
					<details>
						<summary className="py-2 outline-none cursor-pointer focus:underline">
							What is cors?
						</summary>
						<div className="px-4 pb-4">
							<p>
								Cross-Origin Resource Sharing (CORS) is an HTTP-header based
								mechanism that allows a server to indicate any origins (domain,
								scheme, or port) other than its own from which a browser should
								permit loading resources. CORS also relies on a mechanism by
								which browsers make a "preflight" request to the server hosting
								the cross-origin resource, in order to check that the server
								will permit the actual request. In that preflight, the browser
								sends headers that indicate the HTTP method and headers that
								will be used in the actual request.
							</p>
						</div>
					</details>
					<details>
						<summary className="py-2 outline-none cursor-pointer focus:underline">
							Why are you using firebase? What other options do you have to
							implement authentication?
						</summary>
						<div className="px-4 pb-4">
							<p>
								The Firebase Realtime Database lets you build rich,
								collaborative applications by allowing secure access to the
								database directly from client-side code. Data is persisted
								locally, and even while offline, realtime events continue to
								fire, giving the end user a responsive experience. I have
								implemented GitHub and Google login authentication into this
								project
							</p>
						</div>
					</details>
					<details>
						<summary className="py-2 outline-none cursor-pointer focus:underline">
							How does the private route work?
						</summary>
						<div className="px-4 pb-4 space-y-2">
							<p>
								The react private route component renders child components (
								children ) if the user is logged in. If not logged in the user
								is redirected to the /login page with the return url passed in
								the location state property.
							</p>
						</div>
					</details>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
