import React from "react";
import ChatArea from "./Chat/ChatArea";
import SideSection from "./SideSection";
import Total_balance from "./Total_balance";

const MidSection = () => {
  return (
    <>
      <div
        id="mid_section"
        className="mt-4 w-full px-2 py-2 h-[88vh] flex gap-6"
      >
        <div className="w-[440px] overflow-hidden">
          <Total_balance />
          <br />
          <ChatArea />
        </div>
        <div className="w-[780px]">
          <SideSection />
        </div>
      </div>
    </>
  );
};

export default MidSection;
