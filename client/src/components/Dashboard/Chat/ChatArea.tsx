import React from "react";
import ChatFriends from "./ChatFriends";

const ChatArea = () => {
  return (
    <>
      <div
        id="chatArea"
        className="w-[100%] bg-white h-[600px] px-2 rounded-lg pb-28"
      >
        <ChatFriends />
      </div>
    </>
  );
};

export default ChatArea;
