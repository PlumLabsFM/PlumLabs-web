import Cookies from 'js-cookie';
import { COOKIES } from "./constants";

export const isloggedIn = () => {
	const user = Cookies.get(COOKIES.USER);

	if (user) {
		return true;
	}

	return false;
};