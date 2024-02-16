import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './FeaturesComponent.css';

function FeaturesComponent() {
  return (
    <div className="container-xxl feature py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Why Choosing Us!
            </p>
            <h1 className="display-5 mb-4"><b>Why choosing us would be a great choice</b></h1>
            <p className="mb-4">
              Working in Germany is the action plan for everyone who aspires to a peaceful and balanced life, because Germany is the second-most richest economy and the country with the highest social benefits. There is no age limit, comfortable financial situation, and the social culture is focused on individuals' quality of life.
            </p>
            <a className="btn btn-primary py-3 px-5" href="https://indephysio.com/Admin/job">Apply Now</a>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="feature-box border rounded p-4 hover-effect">
                  <FontAwesomeIcon icon={faCheck} className="fa-3x text-primary mb-3" />
                  <h4 className="mb-3">Fast Executions</h4>
                  <p className="mb-3">We have tailor-made the fast-track career pathway for Indian physiotherapists</p>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="feature-box border rounded p-4 hover-effect">
                  <FontAwesomeIcon icon={faCheck} className="fa-3x text-primary mb-3" />
                  <h4 className="mb-3">Guide & Support</h4>
                  <p className="mb-3">We guide you to find the most suitable job and location based on your goals</p>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="feature-box border rounded p-4 hover-effect">
                  <FontAwesomeIcon icon={faCheck} className="fa-3x text-primary mb-3" />
                  <h4 className="mb-3">Financial Security</h4>
                  <p className="mb-3">We finance you our service charges until you receive your first paycheck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;