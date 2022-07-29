import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatModel from "./ChatModel";

const ChatFriends = () => {
  const { user } = useSelector((state: any) => state.user);
  const customers = [];
  console.log(user);
  customers.push(user[1]);

  const colors = [
    "rgb(147, 195, 236)",
    "rgb(187, 250, 1)",
    "rgb(151, 233, 195)",
    "rgb(248, 229, 207)",
    "rgb(254, 103, 177)",
    "rgb(197, 163, 108)",
    "rgb(52, 254, 164)",
    "rgb(47, 230, 250)",
  ];
  const [active, setActive] = useState(false);
  return (
    <>
      {active && <ChatModel setActive={setActive} />}
      <div className="px-2 py-2 w-full">
        <h1 className="text-xl font-bold">Chats</h1>
        {customers.map((c) => {
          let color = Math.floor(Math.random() * colors.length);
          return (
            <div className="flex items-center w-full my-4" key={c._id}>
              <p
                style={{ backgroundColor: `${colors[color]}` }}
                className="rounded-[100%] w-[50px] h-[44px] cursor-pointer flex items-center justify-center font-bold text-xl"
                onClick={() => setActive(true)}
              >
                {c.name[0]}
              </p>
              <div className="flex justify-between w-full px-4 border-b-2 py-1">
                <div>
                  <p
                    className="font-bold cursor-pointer"
                    onClick={() => setActive(true)}
                  >
                    {c.name}
                  </p>
                  <p className="text-sm">Start chat</p>
                </div>
                <p className="text-sm">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatFriends;
