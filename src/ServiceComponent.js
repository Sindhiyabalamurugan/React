import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function ServiceComponent() {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container-xxl service py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
          <h1 className="display-5 mb-5"><b>We walk you through every step to success</b></h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex flex-column w-100 h-100 me-4">
              <button className={`nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-1')}>
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i><FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;German Course</h5>
              </button>
              <button className={`nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-2')}>
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i><FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;Registration Process</h5>
              </button>
              <button className={`nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-3')}>
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i><FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;Job Placement</h5>
              </button>
              <button className={`nav-link w-100 d-flex align-items-center text-start border p-4 mb-0 ${activeTab === 'tab-pane-4' ? 'active' : ''}`} onClick={() => handleTabChange('tab-pane-4')}>
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i><FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;Study in Germany</h5>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
            <div className={`tab-pane fade ${activeTab === 'tab-pane-1' ? 'show active' : ''}`} id="tab-pane-1">
  <div className="row g-4">
    <div className="col-md-6" style={{ minHeight: '350px' }}>
      <div className="position-relative h-100">
        <img className="position-absolute rounded w-100 h-100" src="https://indephysio.com//assets/img/service-1.jpg" style={{ objectFit: 'cover' }} alt="German Course" />
      </div>
    </div>
    <div className="col-md-6">
      <h3 className="mb-4">German Course</h3>
      <p className="mb-4">Our German course is designed specifically for Indian Physios, featuring physio-specific medical terms in German, seminars on German healthcare, and culture at the most affordable cost.</p>
      <ul>
        <li>Customized for Indian Physios</li>
        <li>Affordable</li>
        <li>Fast track</li>
        <li>Qualified teachers</li>
      </ul>
      <a href="/Admin/job" className="btn btn-primary py-3 px-5 mt-3">Apply Now</a>
    </div>
  </div>
</div>
              {/* Tab Pane 2 */}
<div className={`tab-pane fade ${activeTab === 'tab-pane-2' ? 'show active' : ''}`} id="tab-pane-2">
  <div className="row g-4">
    <div className="col-md-6" style={{ minHeight: '350px' }}>
      <div className="position-relative h-100">
        <img className="position-absolute rounded w-100 h-100" src="https://indephysio.com//assets/img/service-2.jpg" style={{ objectFit: 'cover' }} alt="Registration Process" />
      </div>
    </div>
    <div className="col-md-6">
      <h3 className="mb-4">Registration Process</h3>
      <p className="mb-4">We assure you a successful registration process if you have 4.5 years of education with 6 months of clinical internship. We assist you with German government translators and notaries.</p>
      <ul>
        <li>Successful Registration</li>
        <li>Well Began</li>
        <li>Fail-Proof</li>
        <li>Desired Location</li>
      </ul>
      <a href="/Admin/job" className="btn btn-primary py-3 px-5 mt-3">Apply Now</a>
    </div>
  </div>
</div>

{/* Tab Pane 3 */}
<div className={`tab-pane fade ${activeTab === 'tab-pane-3' ? 'show active' : ''}`} id="tab-pane-3">
  <div className="row g-4">
    <div className="col-md-6" style={{ minHeight: '350px' }}>
      <div className="position-relative h-100">
        <img className="position-absolute rounded w-100 h-100" src="https://indephysio.com//assets/img/service-3.jpg" style={{ objectFit: 'cover' }} alt="Job Placement" />
      </div>
    </div>
    <div className="col-md-6">
      <h3 className="mb-4">Job Placement</h3>
      <p className="mb-4">We have a wide network of Physio Employers across Germany, so you can choose to work based on your personal preferences rather than availability. We also assist in case you want to relocate within Germany, free of cost.</p>
      <ul>
        <li>Wide Network of Employers</li>
        <li>Across Germany</li>
        <li>Attractive Salary</li>
      </ul>
      <a href="/Admin/job" className="btn btn-primary py-3 px-5 mt-3">Apply Now</a>
    </div>
  </div>
</div>

{/* Tab Pane 4 */}
<div className={`tab-pane fade ${activeTab === 'tab-pane-4' ? 'show active' : ''}`} id="tab-pane-4">
  <div className="row g-4">
    <div className="col-md-6" style={{ minHeight: '350px' }}>
      <div className="position-relative h-100">
        <img className="position-absolute rounded w-100 h-100" src="https://indephysio.com//assets/img/service-4.jpg" style={{ objectFit: 'cover' }} alt="Study in Germany" />
      </div>
    </div>
    <div className="col-md-6">
      <h3 className="mb-4">Study in Germany</h3>
      <p className="mb-4">We are connected with Indian Physio students who have already crossed the same path you are currently on. They can directly guide you through the entire process until you feel at home in Germany.</p>
      <ul>
        <li>Guided by Experienced Students</li>
        <li>Transparent Process</li>
        <li>Less Expensive</li>
      </ul>
      <a href="/Admin/job" className="btn btn-primary py-3 px-5 mt-3">Apply Now</a>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;