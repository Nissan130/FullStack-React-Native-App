import React, { createContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext(null);

 

// AuthProvider Component
function AuthProvider({ children }) {
    const [state, setState] = useState({
        user: null,
        token: "",
    });

//default axios setting
axios.defaults.baseURL= "http://10.1.1.108:8080/api/v1";

    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem("@auth");
            let loginData = data ? JSON.parse(data) : null;
            if (loginData) {
                setState({ user: loginData.user, token: loginData.token });
            }
        };
         loadLocalStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
