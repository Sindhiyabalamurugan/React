import React from 'react';
import './App.css'; // If you have any custom CSS

import Home from './Home';

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
import AdminSuccess from './AdminSuccess';
import Projects from './Projects';
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateStatusReport from './CandidateStatusReport';
import Createlink from './Createlink';
import Register from './Register';
import LoginCandidate from './LoginCandidate';
import Candidate from './Candidate';
import CarouselComponent from './CarouselComponent';
import GermanJob from './GermanJob';
import Articles from './Articles';

function App() {
  return (
    <div>
     
       <HeaderComponent />
       <Router>
      <div>
       
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<CandidateStatusReport />} />
          <Route path="/createlink/:referrerId" element={<Createlink />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/c/login" element={<LoginCandidate />} />
          <Route path="/candidate/:candidateId" element={<Candidate />} />
          <Route path="/Admin/job" element={<ContactForm/>}/>          
          <Route path="/Admin/success" element={<AdminSuccess/>}/>          
          <Route path="/Admin/germanjob" element={<GermanJob/>}/>
          <Route path="/Admin/articles" element={<Articles/>}/>
        </Routes>
       
      </div>
    </Router>
      <Footer />
     
        </div>
      
  );
}

export default App;
