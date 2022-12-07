import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./component/utilities/Route/Route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
