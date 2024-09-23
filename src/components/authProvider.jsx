import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(undefined)

export default function AuthProvider({children}) {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem('token'));
  const [userRole, setUserRole] = useState(undefined);
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  async function handleLogin(loginCredentials) {
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
          console.log("Login Success");
          return response.json();
        } else {
          console.log("Login Failed");
          throw new Error("Failed to login");
        }}).then((data) => {
        console.log(data);
        setIsLogged(true);
        sessionStorage.setItem("token", data.token);
        setAuthToken(data.token);
        setUserRole(data.userRole);
        // success = true;
      }).catch((error) => {
        sessionStorage.removeItem('token');
        setUserRole(null);
        setIsLogged(false);
        console.error(error);
      }).finally(() => {
        setLoading(false);
        // return success;
      });
  }

  function handleLogout() {
    sessionStorage.removeItem('token');
    setAuthToken(null);
    setUserRole(null);
    setIsLogged(false);
  }

  useEffect(() => {
    console.log('AuthToken: ' + authToken + ' UserRole: ' + userRole + ' IsLogged: ' + isLogged);
  }, [authToken, userRole, isLogged])

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userRole,
        isLogged,
        loading,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
