import React from 'react';
import './App.css'; // If you have any custom CSS
import Carousel from './CarouselComponent'; // Assuming Carousel component is in a separate file called Carousel.js

import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import WebinarComponent from './WebinarComponent';
import FeaturesComponent from './FeaturesComponent';
import ServiceComponent from './ServiceComponent';
import CallbackComponent from './CallbackComponent';
import Footer from './Footer';
import Login from './Login';
import SignUpForm from './SignUpForm';

import Projects from './Projects';
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateStatusReport from './CandidateStatusReport';
import Createlink from './Createlink';
import Register from './Register';
import LoginCandidate from './LoginCandidate';
import Candidate from './Candidate';


function App() {
  return (
    <div>
     
       <HeaderComponent />
       <Router>
      <div>
       
        
        <Routes>
        
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<CandidateStatusReport />} />
          <Route path="/createlink/:referrerId" element={<Createlink />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/c/login" element={<LoginCandidate />} />
          <Route path="/candidate/:candidateId" element={<Candidate />} />
          
        </Routes>
       
      </div>
    </Router>
      <Footer />
     
        </div>
      
  );
}

export default App;