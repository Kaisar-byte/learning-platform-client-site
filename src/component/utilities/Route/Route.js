import { createBrowserRouter } from "react-router-dom";
import Course from "../../Course/Course";
import Courses from "../../Courses/Courses";
import Home from "../../Home/Home";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Sidebar from "../../Sidebar/Sidebar";
import SingleCourse from "../../SingleCourse/SingleCourse";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/courses",
				element: <Courses></Courses>,
			},
			{
				path: "/courses/:id",
				element: <SingleCourse></SingleCourse>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/courses/${params.id}`),
			},
			{
				path: "/singleCourse",
				element: <SingleCourse></SingleCourse>,
				loader: () => fetch(`http://localhost:5000/courses`),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/sidebar",
				element: <Sidebar></Sidebar>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/courses/${params.id}`),
			},
		],
	},
]);

export default router;
