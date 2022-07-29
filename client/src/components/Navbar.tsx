import React, { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkLogin } from "../redux/user/action";

export default function Navbar() {
  return (
    <div className="h-[60px] w-[100vw] bg-[#fff] flex justify-center border-b-2">
      <div className="w-[80%] h-full flex items-center">
        <NavLink to="/walter-wallet" className="flex-1 items-center">
          <img src={Logo} alt="company logo" width="60%" />
        </NavLink>
        <div className="flex-1">
          <ul className="list-none flex justify-center gap-5">
            <NavLink to="/walter-wallet">Home</NavLink>
            <NavLink to="/walter-wallet/about">About</NavLink>
            <NavLink to="/walter-wallet/contact-us">Contact Us</NavLink>
          </ul>
        </div>
        <div className="flex flex-1 gap-5 items-center justify-end">
          <NavLink to="/walter-wallet/login" className="flex items-center">
            Log in
          </NavLink>
          <NavLink
            to="/walter-wallet/register"
            className="flex items-center bg-blue-600 p-2 text-white rounded"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
