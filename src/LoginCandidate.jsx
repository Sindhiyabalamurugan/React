import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import './SignUpForm.css';


const LoginCandidate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
 

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://inde.physioplustech.in/c/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      const responseData = await response.json();
      const {candidate_id} = responseData;

      // Assuming responseData contains a token or some indication of successful login
      // Use navigate to redirect to the Candidate page
      navigate(`/candidate/${candidate_id}`); // Redirect to Candidate page with candidateId
      setSuccessMessage("Login successful");
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid username or password");
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage("");
  };

  return (
    <>
    <div className="container-2">
    <h1>Login </h1>
      <div className="login-outer-input w-100 input-container">
        <TextField
          id="outlined-basic"
          className="input-login"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-outer-input w-100 input-container">
        <TextField
          id="outlined-basic"
          className="input-login"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error !== ""}
          helperText={error}
          type="password"
        />
      </div>

      <div className="login-outer-input input-container">
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="input-login"
          size="large"
          disableElevation
        >
          Login
        </Button>
      </div>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage}
      />
      </div>
    </>
  );
};

export default LoginCandidate;
