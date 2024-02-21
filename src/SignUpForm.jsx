import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css'; // Import the CSS file
import { Link } from 'react-router-dom'; 

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    designation: '',
    institute: '',
    otpEntered: ''
  });
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otpValid, setOtpValid] = useState(false); // State to track OTP validation
  const [otpSent, setOtpSent] = useState(false); // State to track whether OTP is sent
  const [otpMessage, setOtpMessage] = useState(''); // State to store OTP message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOTP = async () => {
    try {
      await axios.post('http://inde.physioplustech.in/r/sendOTP', formData);
      setShowOTPInput(true);
      setOtpValid(true); // Reset OTP validation state
      setOtpSent(true); // Set OTP sent state to true
      setOtpMessage('OTP sent successfully');
      console.log('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleValidateOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3002/r/verifyOTP', {
        mobile: formData.mobile,
        otpEntered: formData.otpEntered
      });
      setOtpValid(response.data.isValid);
      if (response.data.isValid) {
        setOtpMessage('Correct OTP entered. You can now sign up.');
      } else {
        setOtpMessage('Invalid OTP. Please enter a valid OTP.');
      }
      console.log('OTP validated successfully');
    } catch (error) {
      console.error('Error validating OTP:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpValid) {
      // Proceed with signup if OTP is valid
      try {
        // Add your signup logic here
        console.log('Form submitted successfully:', formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Invalid OTP. Please enter a valid OTP.');
    }
  };

  return (
    <div className="container-2">
      <h1>Sign Up for Free</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field-wrap">
          <label>Full Name<span className="req">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="field-wrap">
          <label>Mobile Number<span className="req">*</span></label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile number"
            required
          />
        </div>
        <div className="field-wrap">
          <label>Email Address<span className="req">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="field-wrap">
          <label>Designation<span className="req">*</span></label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Eg: principal"
            required
          />
        </div>
        <div className="field-wrap">
          <label>Name of the institute/company<span className="req">*</span></label>
          <input
            type="text"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            placeholder="Eg: MVM college"
            required
          />
        </div>
        <p>If you already have an account? <Link to="/login">Login</Link>.</p>
        {showOTPInput && (
          <div className="field-wrap" id="enterOTP">
            <label>Enter the OTP <span className="req">*</span></label>
            <input
              type="number"
              name="otpEntered"
              value={formData.otpEntered}
              onChange={handleChange}
              required
            />
            <button className="button-2" type="button" onClick={handleValidateOTP}>Validate OTP</button>
            <p className="otp-message">{otpMessage}</p>
          </div>
        )}
        {!otpValid && (
          <button className="button-2" type="button" onClick={handleSendOTP}>Send OTP</button>
        )}
        {otpValid && (
          <button className="button-2" type="submit">Sign up</button>
        )}

      </form>
    </div>
  );
}

export default SignUpForm;
