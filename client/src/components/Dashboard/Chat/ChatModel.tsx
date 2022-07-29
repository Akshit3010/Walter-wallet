import React from "react";
import { FiSend } from "react-icons/fi";
import useChat from "./Hooks/useChat";
import "./ChatModel.css";

type propType = {
  setActive: (v: boolean) => void;
};

const ChatModel = ({ setActive }: propType) => {
  const { messages, sendMessage } = useChat(1234);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };
  return (
    <>
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center overflow-hidden">
        <div className="relative bg-white w-[70%] h-[80vh] rounded-lg">
          <div className="py-4 px-4 flex justify-between">
            <h1 className="font-bold  text-xl">ChatRoom</h1>
            <span
              className="font-bold cursor-pointer text-xl"
              onClick={() => setActive(false)}
            >
              X
            </span>
          </div>
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message: any, i: any) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
            </ol>
          </div>
          <div className="absolute bottom-2 left-0 w-full px-2">
            <form className="flex" onSubmit={handleSendMessage}>
              <input
                className="border-none bg-gray-200 px-2 py-2 rounded-xl w-full mx-2 outline-none"
                type="text"
                placeholder="Type a  message"
                value={newMessage}
                onChange={handleNewMessageChange}
              />
              <button
                type="submit"
                className="bg-blue-500 rounded-full w-[60px] h-[56px] flex items-center justify-center text-white"
              >
                <FiSend className="text-2xl" style={{ color: "#fff" }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModel;
