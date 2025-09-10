import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = document.cookie.includes("token"); // cookie check
  return isLoggedIn ? children : <Navigate to="/user/login" replace />;
};

export default ProtectedRoute;
