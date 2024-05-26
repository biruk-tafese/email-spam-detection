import React, { useState } from 'react';
import axios from 'axios';

const ChatSessions = () => {
  const [messages, setMessages] = useState([
    
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return; // Prevent empty messages
  
    try {
      // Send the user's message to the backend for prediction
      const response = await axios.get(`http://localhost:8000/predict?text=${encodeURIComponent(newMessage)}`);
      const prediction = response.data; // Assuming the prediction is returned as a string
      
      // Add both the user's message and the AI's response to the chat
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "User" },
        { id: messages.length + 2, text: prediction, sender: "AI" }
      ]);
      setNewMessage("");
    } catch (error) {
      console.error('Error fetching predictions:', error);
      // Optionally handle error
    }
  };
  

return (
    <div className="flex flex-col h-screen">
        <h className="text-3xl font-bold p-4 bg-gray-200 text-center">Filter terms as  spam or ham</h>
        <div className="flex-1 overflow-y-auto p-4 max-h-[70vh]">
         
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.sender === "User" ? "justify-end" : "justify-start"} mb-2`}
                >
                    <div
                        className={`max-w-md px-4 py-2 rounded-lg ${message.sender === "User" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        {message.text}
                    </div>
                </div>
            ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="p-4">
            <div className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="mx-4 w-3/4 px-4 py-4 align-middle border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </form>
    </div>
);
}

export default ChatSessions;
