import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const MainRoutes = () => {
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
