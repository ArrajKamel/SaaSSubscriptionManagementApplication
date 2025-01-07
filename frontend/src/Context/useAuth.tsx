import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    isPremium: () => boolean;
};

type Props = { children: React.ReactNode }

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isPremiumState, setIsPremiumState] = useState<boolean>(false);
    const [isReady, setIsReady] = useState(false);
    

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
        }
        setIsReady(true);
    }, [])

    const registerUser = async (email:string, username:string, password: string) => {
        await registerAPI(email, username, password).then((response) => {
            if(response) {
                localStorage.setItem("token", response?.data.token);
                const userObj =  {
                    userName: response?.data.userName,
                    email: response?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(response?.data.token);
                setUser(userObj!);
                setIsPremiumState(false);
                toast.success("sign up success!");
                navigate("/");
            }
        })
        .catch(() => toast.warning("server error occoured!"));
    };

    const loginUser = async (username:string, password: string) => {
        await loginAPI(username, password).then((response) => {
            if(response) {
                localStorage.setItem("token", response?.data.token);
                const userObj =  {
                    userName: response?.data.userName,
                    email: response?.data.email,
                    isPremium: response?.data.isPremium
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(response?.data.token);
                setUser(userObj!);
                setIsPremiumState(userObj.isPremium);
                toast.success("login success!");
                navigate("/sub");

            }
        })
        .catch(() => toast.warning("server error occoured!"));
    };

    const isLoggedIn = () => {
        return !!user; 
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        navigate("/");
    }

    const isPremium = () => {
        if(isPremiumState)
            return true;
        else 
            return false; 
    }

    return (
        <UserContext.Provider value={{registerUser, loginUser,  user, token, logout, isLoggedIn, isPremium}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext);