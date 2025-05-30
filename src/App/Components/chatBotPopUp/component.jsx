import React from "react";

const ChatBotPopup = ({ onClose }) => {
  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col">
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-md font-semibold">ChatBot</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          &times;
        </button>
      </div>
      <div className="flex-1 p-3 overflow-y-auto">
        {/* Chat content or queries go here */}
        <p className="text-sm">Hello! How can I help you?</p>
      </div>
      <div className="p-3 border-t ">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border rounded text-sm"
        />
      </div>
    </div>
  );
};

export default ChatBotPopup;
