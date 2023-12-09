import { createContext, useState } from "react";
import { useCookie } from "../utils/cookie_manager";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { getTokenCookie, getUserCookie, setTokenCookie, setUserCookie } = useCookie();
    const [user, setUser] = useState({ id: getUserCookie()?.id || 0, name: getUserCookie()?.name || '', email: getUserCookie()?.email || '', token: getTokenCookie() || '' });
    const updateUser = ({ id, name, email, token }) => {
        setTokenCookie(token);
        setUserCookie({ id, name, email });
        setUser({ id: id, name: name, email: email, token: token });
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};