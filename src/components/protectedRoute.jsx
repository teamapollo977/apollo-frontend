import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ allowedRoles, loggedOutOnly, children}) => {
  const { userRole, isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("UserRole: " + userRole);
    console.log("AllowedRoles: " + allowedRoles);
    if (loggedOutOnly) {
      if (isLogged) {
        navigate("/dashboard");
      }
    } else if (!isLogged || (allowedRoles && !allowedRoles.includes(userRole))) {
      navigate("/signin");
    }
  }, [userRole, allowedRoles, navigate]);

  // if (userRole === undefined) {
  //   return <p>Loading...</p>;
  // };

  return children;
}

export default ProtectedRoute;
