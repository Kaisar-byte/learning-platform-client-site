<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './component/utilities/Route/Route'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
>>>>>>> 7bdb76546368d35ce897c98fe6786183e3739598
}

export default App;
