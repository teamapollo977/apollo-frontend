import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ allowedRoles, loggedOutOnly, children}) => {
  const { userRole, isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOutOnly && isLogged || (allowedRoles && !allowedRoles.includes(userRole))) {
      navigate("/dashboard");
    } else if (!loggedOutOnly && !isLogged) {
      navigate("/signin");
    }
  }, [userRole, allowedRoles, navigate]);

  // if (userRole === undefined) {
  //   return <p>Loading...</p>;
  // };

  return children;
}

export default ProtectedRoute;
