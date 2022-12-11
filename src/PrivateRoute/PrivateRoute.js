import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <FaSpinner size={"26px"}></FaSpinner>;
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;
};

export default PrivateRoute;
