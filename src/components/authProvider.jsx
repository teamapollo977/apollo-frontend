import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(undefined)

const AuthProvider = ({children}) => {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem('token'));
  const [userRole, setUserRole] = useState(undefined);
  const [userName, setUserName] = useState(sessionStorage.getItem('userName'));
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  const handleLogin = async (loginCredentials) => {
    // let success = false;
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL + "/api/Auth/Login", {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    }).then((response) => {
        if (response.ok) {
          // console.log("Login Success");
          return response.json();
        } else {
          // console.log("Login Failed");
          throw new Error("Failed to login");
        }}).then((data) => {
        // console.log(data);
        setIsLogged(true);
        sessionStorage.setItem("token", data.token);
        setAuthToken(data.token);
        setUserRole(data.userRole);
        // success = true;
      }).catch((error) => {
        sessionStorage.removeItem('token');
        setUserRole(null);
        setIsLogged(false);
        // console.error(error);
      }).finally(() => {
        setLoading(false);
        // return success;
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
        if (response.ok) {
          // console.log("Signup Success");
          return response.json();
        } else {
          // console.log("Signup Failed");
          throw new Error("Failed to signup");
        }}).then((data) => {
        // console.log(data);
        setIsLogged(true);
        sessionStorage.setItem("token", data.token);
        setAuthToken(data.token);
        setUserRole(data.userRole);
        sessionStorage.setItem("userName", signupCredentials.userName);
        setUserName(signupCredentials.userName);
      }).catch((error) => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userName');
        setUserRole(null);
        setIsLogged(false);
        // console.error(error);
      }).finally(() => {
        setLoading(false);
      });
  };

  const getClubs = async () => {
    fetch(import.meta.env.VITE_API_URL + "/api/Club", {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application",
      },
    }).then((response) => {
        if (response.ok) {
          // console.log("Get Clubs Success");
          return response.json();
        } else {
          // console.log("Get Clubs Failed");
          throw new Error("Failed to get clubs");
        }}).then((data) => {
        // console.log(data);
      }).catch((error) => {
        // console.error(error);
      }).finally(() => {
        setLoading(false);
      })
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    setAuthToken(null);
    setUserRole(null);
    setUserName(null);
    setIsLogged(false);
  }

  // useEffect(() => {
  //   console.log('AuthToken: ' + authToken + ' UserRole: ' + userRole + ' IsLogged: ' + isLogged);
  // }, [authToken, userRole, isLogged])
  //
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
        getClubs,
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
