import { LOCAL_STORAGE } from "./constants";

export const isLogin = () => {
	const user = localStorage.getItem(LOCAL_STORAGE.USER);

	if (user) {
		return true;
	}

	return false;
};