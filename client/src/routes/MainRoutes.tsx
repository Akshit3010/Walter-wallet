import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customer from "../components/Dashboard/Customer/Customer";
import Dashboard from "../components/Dashboard/Dashboard";
import MidSection from "../components/Dashboard/MidSection";
import Money from "../components/Dashboard/Money/Money";
import Settings from "../components/Dashboard/Settings/Settings";
import Transactions from "../components/Dashboard/Transactions/Transactions";
import Navbar from "../components/Navbar";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const MainRoutes = () => {
  const { pathname } = useLocation();
  if (
    pathname === "/walter-wallet/dashboard" ||
    pathname === "/walter-wallet/money" ||
    pathname === "/walter-wallet/transaction" ||
    pathname === "/walter-wallet/settings" ||
    pathname === "/walter-wallet/add-customer"
  ) {
    return (
      <Routes>
        <Route path={"/"} element={<Dashboard />}>
          <Route path="walter-wallet/dashboard" element={<MidSection />} />
          <Route path="walter-wallet/add-customer" element={<Customer />} />
          <Route path="walter-wallet/money" element={<Money />} />
          <Route path="walter-wallet/transaction" element={<Transactions />} />
          <Route path="walter-wallet/settings" element={<Settings />} />
        </Route>
      </Routes>
    );
  }
  return (
    <>
      <ToastContainer />
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
