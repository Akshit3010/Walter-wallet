import React from "react";

const SideSection = () => {
  return (
    <>
      <div className="bg-white rounded-xl px-4 py-4 flex gap-2">
        <div>
          <h1 className="font-bold text-2xl flex items-center">You'll Give</h1>
          <h2 className="text-green-600 font-bold text-xl">₹ 0</h2>
        </div>
        <div>
          <h1 className="font-bold text-2xl flex items-center">You'll Get</h1>
          <h2 className="text-red-600 font-bold text-xl">₹ 0</h2>
        </div>
      </div>
    </>
  );
};

export default SideSection;
