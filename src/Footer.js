import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

// Add the icons to the library
library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope);

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Our Office</h4>
            <p className="mb-2"><FontAwesomeIcon icon="map-marker-alt" className="me-3" />Mittelstraße 10 <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;61169 Friedberg<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hessen,Germany.</p>
            <p className="mb-2"><FontAwesomeIcon icon="phone-alt" className="me-3" />+49 1764 1717 496,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 98946 04603</p>
            <p className="mb-2"><FontAwesomeIcon icon="envelope" className="me-3" />info@indephysio.com</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Services</h4>
            <ul className="list-unstyled">
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#services-link">German Course</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#services-link">Registration Process</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#services-link">Job Placement</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#services-link">Study in Germany</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Job Location</h4>
            <ul className="list-unstyled">
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Frankfurt</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Munich</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Heidelberg</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Berlin</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Stuttgart</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Koln</a></li>
              <li><BiChevronRight className="bi-link fa-1x text-primary" /><a href="#job-location-link">Hamburg</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Newsletter</h4>
            <form action="https://indephysio.com/Admin/newsletter" method="post" id="form" role="form" parsley-validate="">
              <div className="position-relative w-100">
                <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" id="mail" name="mail" placeholder="Your Email" />
                <button className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" type="submit">SignUp</button>
              </div>
              <div className="alert alert-danger fade show email" style={{ padding: '0.5em', display: 'none' }}> Email already Exist</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;