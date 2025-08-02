import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./ContactInfo.css";

const ContactInfo = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("http://localhost:5000/contact/all", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setMessages(data); // Set messages in state
          setError(""); // Clear any previous errors
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch messages.");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching messages.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchMessages();
  }, []);

  // Function to handle delete action
  const handleDelete = async (id) => {
    console.log("Delete called for ID:", id); // Log for debugging
  
    try {
      const response = await fetch(`http://localhost:5000/contact/contact/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
  
      if (response.ok) {
        console.log("Message deleted successfully"); // Log success
        // Remove deleted message from state
        setMessages(prevMessages => prevMessages.filter(msg => msg._id !== id));
        setError("");
      } else {
        const errorData = await response.json();
        console.log("Delete error response:", errorData); // Log error details
        setError(errorData.message || "Failed to delete message.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setError("An error occurred while deleting the message.");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact Information</h1>

        {loading ? (
          <p>Loading messages...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="contact-details">
            {messages.map((msg) => (
              <div key={msg._id} className="message-item">
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Message:</strong> {msg.message}</p>
                <p><strong>Date:</strong> {new Date(msg.createdAt).toLocaleString()}</p>
                <button className="delete-btn" onClick={() => handleDelete(msg._id)}>Delete</button>                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo; 
