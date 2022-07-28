import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const MainRoutes = () => {
  const { pathname } = useLocation();
  if (pathname === "/walter-wallet/dashboard") {
    return (
      <Routes>
        <Route path={pathname} element={<Dashboard />} />
      </Routes>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/walter-wallet" />} />
        <Route path="/walter-wallet" element={<HomePage />} />
        <Route path="/walter-wallet/login" element={<LoginPage />} />
        <Route path="/walter-wallet/register" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
