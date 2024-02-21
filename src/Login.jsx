import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './SignUpForm.css';

import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
const Login = () => {
  const [mobile, setMobile] = useState('');
  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOTP] = useState('');
  const [isValidOTP, setIsValidOTP] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleVerifyUser = async () => {
    try {
      const response = await axios.post('http://inde.physioplustech.in/r/login', { mobile });
      const isUserExists = response.data.error !== 'User not found';
      if (isUserExists) {
        setShowOTPField(true);
      } else {
        console.log("User not exist");
      }
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://inde.physioplustech.in/r/verifyOTP', { mobile, otpEntered: otp });
      setIsValidOTP(response.data.isValid);
      if (response.data.isValid) {
        // Store token in localStorage
       const token = localStorage.setItem('token', response.data.token);
        
       console.log(token);
        navigate('/dashboard');
        // Redirect user to the dashboard or another page
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      
    <div className="container-2">
       
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="mobile">Mobile number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control"
        />
      </div>
      <p>Don't have an account? <Link to="/">Create an Account</Link>.</p>
      <button onClick={handleVerifyUser} className="btn btn-primary">Verify User</button>
      {showOTPField && (
        <div>
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="form-control"
            />
          </div>
          <button onClick={handleVerifyOTP} className="btn btn-primary">Verify OTP</button>
          {isValidOTP !== null && (
            <p className="otp-validation-msg">{isValidOTP ? 'OTP is valid' : 'Invalid OTP'}</p>
          )}
        </div>
      )}
      
    </div>
    
    </div>
  );
};

export default Login;
