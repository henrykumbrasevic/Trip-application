import {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router";
import api, { setAuth, clearAuth } from "../utils/api.js";


const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    register: () => {},
});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const maybeUser = localStorage.getItem("user");

        if (maybeUser) {
            return JSON.parse(maybeUser);
        }
    });

    const login = async (username, password) => {
        // Paduodas username ir password axios
        setAuth(username, password);
        // Pasiimam priskirtas roles iš serverio
        const response = await api.get("/auth/me");
        const userData = response.data

        // Sujungiam įrašyta username ir password su iš db gaunamomis roles
        // Password iš serverio neteina, nes jis užšifruotas, todėl reikia daryti šį junginį
        const user = {
            username,
            password,
            roles: userData.roles
        }
        // Įšsaugome user info į localStorage, tam kad vėliau galėtu pasiimti axios ir šis context'as
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
    };

    const registerUser = async (username, password) => {
        await api.post("/auth/register", { username, password });
        navigate("/login");
    };

    const logout = () => {
        setUser(null);
        // Ištrinam username ir password iš axios
        clearAuth();
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        // Paduodas sukurtas funkcijas, tam kad jas būtų galima naudoti betkur su useAuth
        <AuthContext.Provider value={{ user, login, logout, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Sukuriamas custom hookas, kuris leidžia naudoti AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
