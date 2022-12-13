import React from "react";
import { createContext } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../component/firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [dragChecked, setDragChecked] = useState(false);

	const providerLogin = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const LogOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const LogIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	const updateUserProfiles = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			console.log("user inside state changed", currentUser);
			if (currentUser === null || currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
		});
	}, []);

	const authInfo = {
		user,
		loading,
		providerLogin,
		LogOut,
		createUser,
		LogIn,
		dragChecked,
		setDragChecked,
		updateUserProfiles,
		verifyEmail,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
