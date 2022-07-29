import React from "react";
import { FaAddressBook } from "react-icons/fa";

const Customer = () => {
  return (
    <>
      <div className="bg-white w-[80%] m-auto px-4 py-4 mt-8  rounded-lg shadow-lg">
        <h1 className="flex items-center text-xl font-bold mb-4">
          <FaAddressBook className="text-2xl text-blue-500 mr-2" /> Add a
          Customer
        </h1>
        <form className="w-full">
          <div className="flex gap-4">
            <div className="w-[50%]">
              <label htmlFor="name" className="text-[14px] font-medium">
                Customer name*
              </label>
              <br />
              <input
                type="text"
                className="border w-full border-gray-400 rounded px-2 py-2 outline-none my-2 "
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="email" className="text-[14px] font-medium">
                Customer email*
              </label>
              <br />
              <input
                type="email"
                className="border w-full border-gray-400 rounded px-2 py-2 outline-none my-2 "
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          <div className="w-[40%] m-auto">
            <input
              className="text-white bg-blue-500 cursor-pointer font-bold rounded h-[40px] w-full mt-2 hover:bg-blue-600"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Customer;
