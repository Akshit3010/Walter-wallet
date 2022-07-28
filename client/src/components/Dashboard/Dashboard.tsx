import React from "react";
import Sidenav from "./Sidenav";
import { BiSearch } from "react-icons/bi";
import Total_balance from "./Total_balance";
import MidSection from "./MidSection";

const Dashboard = () => {
  return (
    <main className="w-full bg-[#F2F3F7] h-screen flex">
      <Sidenav />
      <section className="ml-8 mt-4 w-[80%]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold overflow-hidden">
            Welcome back , User
          </h1>
          <div className="flex items-center justify-center bg-white rounded-[2rem] px-1 py-1">
            <BiSearch className="text-2xl ml-2" />
            <input
              className="bg-[transparent] outline-none border-none ml-2 w-full"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        <MidSection />
      </section>
    </main>
  );
};

export default Dashboard;
