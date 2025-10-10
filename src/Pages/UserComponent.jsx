import React from 'react'
import { useState } from "react";


const UserComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="animated-bg">
      <div className="user-card">
        <h2 className="user-title">{isLogin ? "Welcome Back!" : "Join Us!"}</h2>
        <p className="user-subtitle">
          {isLogin
            ? "Login to continue shopping your favorite products."
            : "Create an account to start your journey with us."}
        </p>

        <form className="user-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="user-input"
            />
          )}
          <input type="email" placeholder="Email Address" className="user-input" />
          <input type="password" placeholder="Password" className="user-input" />

          <button className="user-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserComponent;
