import { LOGIN, SIGNUP } from "../utils/urlConstant";
import { HttpPost } from "./base";

export const loginUser = async (email, password) => {
	return await HttpPost(LOGIN, {email, password});
};

export const signinUser = async (payload) => {
	return await HttpPost(SIGNUP, payload);
};