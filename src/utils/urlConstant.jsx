export const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const AUTH_SERVICE = {
	LOGIN: `${BASE_URL}/login`,
	SIGN_UP: `${BASE_URL}/create-user`
};

export const LOGIN = AUTH_SERVICE.LOGIN;
export const SIGNUP = AUTH_SERVICE.SIGN_UP;