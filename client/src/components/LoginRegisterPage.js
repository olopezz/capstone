import React, { useState } from "react";
import "./LoginRegisterPage.css";
import Sidebar from "./Sidebar";

function LoginRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submission logic to be implemented.");
  };

  return (
    <>
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <button
        onClick={toggleSidebar}
        style={{
          fontSize: "30px",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        &#9776;
      </button>

      <div className="login-register-container">
        <div className="login-register-form">
          <h1>{isLogin ? "Login" : "Register"}</h1>
          <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" placeholder="Name" required />}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {!isLogin && (
              <input type="password" placeholder="Confirm Password" required />
            )}
            <button type="submit" className="form-button">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin
              ? "Need an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterPage;
