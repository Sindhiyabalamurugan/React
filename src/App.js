import React, { useEffect } from 'react';
import { useState } from 'react';
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
import Testing from './Testing.js';
function App() {
  const [isVisible,setIsVisible]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const scroll_y_axis=window.scrollY;
      if(scroll_y_axis > 300)
      setIsVisible(true);
      else
      setIsVisible(false);
    });

    }
  );

  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  }

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
          <Route path="/testing" element={<Testing/>}/>
        </Routes>
       
      </div>
    </Router>
      <Footer />
      {isVisible && 
        <div onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" style={{ position: "fixed", right: "30px", bottom: "30px", zIndex: "99" }}>
          <i className="bi bi-arrow-up"></i>
        </div>
      }
        </div>
      
  );
}

export default App;
