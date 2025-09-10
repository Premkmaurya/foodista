import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import SellerLogin from "../pages/sellers/SellerLogin";
import SellerRegister from "../pages/sellers/SellerRegister";
import SellerProfile from "../pages/sellers/SellerProfile";
import CreateFood from "../pages/sellers/CreateFood";
import { context } from "../context/AuthContext";
import SellerProtectedRoute from "../utils/SellerProtectedRoute";
import ProtectedRoute from "../utils/ProtectedRoute";
import UserProfile from "../pages/users/UserProfile";

function AppRoutes() {
  const { loggedIn } = useContext(context);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/profile/:id"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/profile/:id"
        element={
          <ProtectedRoute>
            <SellerProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/create-food"
        element={
          <SellerProtectedRoute>
            <CreateFood />
          </SellerProtectedRoute>
        }
      />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/seller/login" element={<SellerLogin />} />
      <Route path="/seller/register" element={<SellerRegister />} />
    </Routes>
  );
}

export default AppRoutes;
