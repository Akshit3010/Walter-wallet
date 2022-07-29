import React from "react";

const SideSection = () => {
  return (
    <>
      <div className="bg-white rounded-xl px-4 py-4 flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Pending Payments</h1>
        <div className="flex gap-10">
          <div>
            <p className="text-[14px] flex items-center">You'll Give</p>
            <h2 className="text-center text-green-600 font-bold text-2xl">
              ₹ 0
            </h2>
          </div>
          <div>
            <p className="text-[14px] flex items-center">You'll Get</p>
            <h2 className="text-center text-red-600 font-bold text-2xl">₹ 0</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSection;
