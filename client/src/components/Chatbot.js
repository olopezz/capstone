import React, { useState } from "react";
import "./Chatbot.css"; // Ensure you have CSS for positioning and styling

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false); // State to manage if chatbox is open

  const toggleChat = () => setIsOpen(!isOpen); // Toggle chat on and off

  return (
    <div className="chatbot-container">
      <img
        src="/images/chatai.JPG" // Using the correct path
        alt="Chatbot"
        onClick={toggleChat} // Toggle chat on image click
        style={{
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          left: "20px",
        }}
      />
      {isOpen && (
        <div className="chatbox">
          <p>How can I help you?</p>
          {/* More interactive chat elements can be added here */}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
