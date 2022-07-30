import React, { useEffect } from "react";
import Sidenav from "./Sidenav";
import { BiSearch } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import MidSection from "./MidSection";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  useEffect(() => {
    document.title = "Walter Wallet - Dashboard"
  }, [])
  console.log(user);
  if (!user || user.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="w-full bg-[#F2F3F7] h-screen flex">
      <Sidenav />
      <section className="ml-8 mt-4 w-[80%]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold overflow-hidden">
            Welcome back, {user && user[0]?.name}
          </h1>
          <div className="flex gap-8">
            <Link
              to={"/walter-wallet/add-customer"}
              className="bg-blue-600 px-4 py-1 text-white rounded-lg flex justify-center items-center gap-2 text-[16px] hover:bg-blue-700"
            >
              <FaAddressBook /> Add a Customer
            </Link>
            <div className="flex items-center justify-center bg-white rounded-[2rem] px-1 py-1">
              <BiSearch className="text-2xl ml-2" />
              <input
                className="bg-[transparent] outline-none border-none ml-2 w-full"
                type="text"
                placeholder="search"
              />
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
