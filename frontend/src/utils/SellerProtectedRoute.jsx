import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SellerProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          "https://backend-3cpr.onrender.com/api/auth/session/seller",
          {},
          { withCredentials: true }
        );
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (authenticated === null) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="black"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Loading....</span>
      </div>
    ); // Show loading spinner or message while checking
  }

  if (!authenticated) {
    return <Navigate to="/seller/register" replace />;
  }

  return children;
};

export default SellerProtectedRoute;
