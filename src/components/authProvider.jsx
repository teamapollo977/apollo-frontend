import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from "sonner";

const AuthContext = createContext(undefined)

const AuthProvider = ({children}) => {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem('token'));
  const [userRole, setUserRole] = useState(sessionStorage.getItem('userRole'));
  const [userName, setUserName] = useState(sessionStorage.getItem('userName'));
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  const saveCredentials = (data) => {
    setAuthToken(data.token);
    sessionStorage.setItem('token', data.token);
    setUserRole(data.userRoll);
    sessionStorage.setItem('userRole', data.userRoll);
    setUserName(data.userName);
    sessionStorage.setItem('userName', data.userName);
    setIsLogged(true);
  }

  const handleLogout = () => {
    setAuthToken(null);
    sessionStorage.removeItem('token');
    setUserRole(null);
    sessionStorage.removeItem('userRole');
    setUserName(null);
    sessionStorage.removeItem('userName');
    setIsLogged(false);
  }

  const handleLogin = async (loginCredentials) => {
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL + "/api/Auth/Login", {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    }).then((response) => {
        if (response.ok) return response.json();
      }).then((data) => {
        saveCredentials(data);
        toast.success("Login successful");
      }).catch((error) => {
        handleLogout();
        toast.error("Login failed. Please try again.");
      }).finally(() => {
        setLoading(false);
      });
  }

  const handleRegister = async (signupCredentials) => {
    console.log(signupCredentials);
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL + "/api/Auth/Register", {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupCredentials),
    }).then((response) => {
        if (response.ok) return response.json();
      }).then((data) => {
        saveCredentials(data);
        toast.success("Account created successfully");
      }).catch((error) => {
        handleLogout();
        toast.error("Signup failed. Please try again.");
      }).finally(() => {
        setLoading(false);
      });
  };

  const handleRegisterClub = async (signupCredentials, OTP, OTPEmail) => {
    console.log(signupCredentials);
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL + "/api/Auth/RegisterClub?otp=" + OTP + "&email=" + OTPEmail, {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupCredentials),
    }).then((response) => {
        if (response.ok) return response.json();
      }).then((data) => {
        saveCredentials(data);
        toast.success("Club and account created successfully. Please login to continue.");
      }).catch((error) => {
        handleLogout();
        toast.error("Signup failed. Please try again.");
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userName,
        userRole,
        isLogged,
        loading,
        handleLogin,
        handleRegister,
        handleRegisterClub,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider;
