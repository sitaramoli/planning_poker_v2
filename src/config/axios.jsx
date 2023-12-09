import axios from "axios";
import { useCookie } from "../utils/cookie_manager";

// const { getTokenCookie } = useCookie();
const instance = axios.create({
    baseURL: 'http://localhost:5050/api',
    withCredentials: true,
});

export default instance;