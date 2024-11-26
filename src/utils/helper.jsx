import { getChart, getCodeScript, saveCodeScript } from '../services/apiServices';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { LOCALSTORAGE } from "./constants";
import { auth, db } from '../services/Firebase';
import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
// const auth = getAuth();

export const isloggedIn = () => {
	const user = localStorage.getItem(LOCALSTORAGE.USER);

	if (user) {
		return true;
	}

	return false;
};

export const fetchChartAndTable = async (graphName, dateRange, signal) => {

	let chartDataValue = null;
	let tableDataValue = null;
	let codeSnippetValue = null;
	let loadingValue = true;
	let newTable = [];

	try {
		const response = await Promise.allSettled([
			getChart(graphName, dateRange, signal),
			getCodeScript(graphName, signal)
		]);
		response.forEach(result => {
			if (result.status === "fulfilled") {
				if (graphName === 'Drawdown_graph') {
	               newTable.push(result.value.data.data[0]);
				}
				if (result.value.data.data) {
					chartDataValue = result.value.data;
					if (result.value.data.dataframe) {
						tableDataValue = result.value.data.dataframe;
					}
				} else {
					codeSnippetValue = result.value.data.code;
				}
			} else {
				console.error("Error:", result.reason);
			}
		});
	} catch (error) {
		console.error("Fetch error:", error);
	} finally {
		loadingValue = false;
	}

	return { chartDataValue, tableDataValue, codeSnippetValue, loadingValue, newTable };
};

export const saveScriptData = async (graphName, data) => {
	let response;
	try {
		response = await saveCodeScript(graphName, data);
	} catch (error) {
		console.error(error);
	}

	return response;
};

//Generate unique id
export function generateUniqueId() {
	return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
}

//Firebase login and signup
export const fireSighupAuth = async ({ email, password }) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return { success: true, user };
	} catch (error) {
		console.error("Firebase Signup Error:", error.code, error.message);
		return { success: false, errorCode: error.code, errorMessage: error.message };
	}
}
export const fireLoginAuth = async ({ email, password }) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return { success: true, user };
	} catch (error) {
		console.error("Firebase Signup Error:", error.code, error.message);
		return { success: false, errorCode: error.code, errorMessage: error.message };
	}
}

//Get all users in chat
export const fetchAllDocuments = async (user_id) => {
	const querySnapshot = await getDocs(collection(db, "users"));
	const documents = querySnapshot.docs.filter(doc => doc.id !== user_id).map(doc => ({ id: doc.id, ...doc.data() }));
	const currUser = querySnapshot.docs.filter(doc => doc.id == user_id).map(doc => ({ id: doc.id, ...doc.data() }));
	return { documents, currUser };
}

// Show chat of a specific person
export const showChildrenDrawerHelper = async (el, currentUser, setChatId, setChildrenDrawer, setPerson, user_id) => {
	setChildrenDrawer(true);
	setPerson(el);

	const combinedId = currentUser.uid > el.uid ? currentUser.uid + el.uid : el.uid + currentUser.uid;
	setChatId(combinedId);

	try {
		const res = await getDoc(doc(db, "chats", combinedId));
		if (!res.exists()) {
			await setDoc(doc(db, "chats", combinedId), { messages: [] });

			await updateDoc(doc(db, "userChats", user_id), {
				[combinedId + ".userInfo"]: {
					uid: el.uid,
					displayName: `${el.firstname} ${el.lastname}`,
				},
				[combinedId + ".date"]: serverTimestamp(),
			});

			await updateDoc(doc(db, "userChats", el.uid), {
				[combinedId + ".userInfo"]: {
					uid: currentUser.uid,
					displayName: `${currentUser.firstname} ${currentUser.lastname}`,
				},
				[combinedId + ".date"]: serverTimestamp(),
			});
		}
	} catch (err) {
		toast.error('Something went wrong. Please try again');
	}
};