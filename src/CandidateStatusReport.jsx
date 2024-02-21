import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import './CandidateStatusReport.css'; // Import CSS file for styling

const CandidateStatusReport = () => {
  const [totalCandidates, setTotalCandidates] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  const [registeredCandidates, setRegisteredCandidates] = useState(null);
  const [totalPlacedCandidates, setTotalPlacedCandidates] = useState(null);
  const [referrerId, setReferrerId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get(`http://inde.physioplustech.in/r/candidateStatusReport?token=${token}`)
      .then(response => {
        const { totalCandidates, totalIncome, registeredCandidates, totalPlacedCandidates, referrerId } = response.data;
        setTotalCandidates(totalCandidates);
        setTotalIncome(totalIncome);
        setRegisteredCandidates(registeredCandidates);
        setTotalPlacedCandidates(totalPlacedCandidates);
        setReferrerId(referrerId);
      })
      .catch(error => {
        setError(error.response.data.error);
      });
  }, []);

  const handleCreateLink = () => {
    navigate(`/createlink/${referrerId}`);
  };

  return (
    
    <div className="candidate-status-report-container">
      <div className="top-box">
        
        <button className="button-1" onClick={handleCreateLink}>+Create Link</button>
      </div>
      <div className="boxes-container">
        <div className="box">
          <h3>Candidates</h3>
          {totalCandidates !== null && (
            <p>{totalCandidates}</p>
          )}
        </div>
        <div className="box">
          <h3>Registered</h3>
          {registeredCandidates !== null && (
            <p>{registeredCandidates}</p>
          )}
        </div>
        </div>
        <div className="boxes-container">
        <div className="box">
          <h3>Income</h3>
          {totalIncome !== null && (
            <p>{totalIncome}</p>
          )}
        </div>
        <div className="box">
          <h3>Placed</h3>
          {totalPlacedCandidates !== null && (
            <p>{totalPlacedCandidates}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateStatusReport;
