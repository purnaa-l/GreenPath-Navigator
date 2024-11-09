import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AdminDash.css"; // Import your styles

const AdminDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false); // Assume loading is managed elsewhere
  const [chatOpen, setChatOpen] = useState(false); // Chatbot visibility state
  const [userMessage, setUserMessage] = useState(""); // Message input from the user
  const [chatMessages, setChatMessages] = useState<any[]>([]); // Store chat messages

  // Toggle chat popup
  const toggleChat = () => setChatOpen(!chatOpen);

  // Handle message send
  const handleSendMessage = async () => {
    if (userMessage.trim() !== "") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", message: userMessage },
      ]);
      setUserMessage("");
  
      // Call the Flask backend for the bot's response
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });
  
      const data = await response.json();
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "greenbot", message: data.response },
      ]);
    }
  };
  

  return (
    <div className="admin-dashboard-container">
      {/* Your existing content */}
      
      {/* Floating Chat Icon */}
      <div id="chat-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chatbot Popup */}
      {chatOpen && (
        <div id="chat-popup">
          <div id="chat-header">GreenBot</div>
          <div id="chat-body">
            {chatMessages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                <b>{msg.sender === "user" ? "You" : "GreenBot"}:</b> {msg.message}
              </div>
            ))}
          </div>
          <input
            type="text"
            id="chat-input"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Ask a question..."
          />
          <button id="send-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}

      {/* Rest of your dashboard */}
    </div>
  );
};

export default AdminDashboard;
