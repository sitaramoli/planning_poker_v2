import { useCookies } from "react-cookie";

export const useCookie = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);

    const setTokenCookie = (token) => {
        setCookie('token', token, { path: '/', maxAge: 86400 });
    };
    const setUserCookie = ({ id, name, email }) => {
        setCookie('user', { id: id, name: name, email: email }, { path: '/', maxAge: 86400 });
    }

    const removeTokenCookie = () => {
        removeCookie('token', { path: '/' });
    };

    const removeUserCookie = () => {
        removeCookie('user', { path: '/' });
    };

    const getTokenCookie = () => {
        return cookies['token'];
    };

    const getUserCookie = () => {
        return cookies['user']
    };

    return { setTokenCookie, removeTokenCookie, getTokenCookie, setUserCookie, removeUserCookie, getUserCookie };
}