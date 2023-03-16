import { createContext, useContext, useEffect, useState } from "react"
import { getAuthToken } from "./services/core/authService";

const AuthContext = createContext({
    isAuthenticated: false
})

const useAuthContext = () => useContext(AuthContext)


function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        getAuthToken().then((res) => {
            if (res) {
                setIsAuthenticated(true);
            }
        })
    }, []);

    if (!isAuthenticated) {
        return (<div>Loading...</div>);
    }

    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    )
};

export { useAuthContext, AuthProvider }