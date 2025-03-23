import React from 'react';
import './SignUpPage.css';
import photo1 from './assets/hu.png'
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/chat"); // Redirect to chatbot page
  };

  return (
    <div className="signup-container">
      <div className="background">
        <div className="purple-blob top-right"></div>
        <div className="purple-blob bottom-left"></div>
        <div className="star-decoration top-left"></div>
        <div className="star-decoration right"></div>
      </div>
      
      {/* <div className="avatar-container">
        <div className="avatar-circle">
          <img src='#' alt="" className="avatar" />
          <div className="avatar-placeholder">#</div>
        </div>
      </div> */}
      
      <div className="signup-card">
        <h1 className="signup-title">SIGN UP<span className="star-icon">🚀</span></h1>
        
        <p className="account-prompt">
          Don't have an account? <a href="#" className="signin-link">Sign In</a>
        </p>
        
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="johndoe@gmail.com" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="John Doe" 
              className="form-input"
            />
          </div>
          
          <div>
            <button type="button" className="primary-button" onClick={handleSignIn}>
              Sign In
            </button> 
          </div>
          
          {/* <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">Or</span>
            <span className="divider-line"></span>
          </div>
          
          <button type="button" className="google-button">
          <FcGoogle className="google-icon" />Sign In Via Google
          </button> */}
        </form>
        
        <p className="legal-text">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;