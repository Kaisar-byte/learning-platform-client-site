import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./component/utilities/Route/Route";
import toast, { Toaster } from "react-hot-toast";

function App() {
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
			<Toaster></Toaster>
		</div>
	);
}

export default App;
