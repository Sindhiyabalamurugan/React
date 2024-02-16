import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';

function AboutComponent() {
  const [activeTab, setActiveTab] = useState('nav-story');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 align-items-end mb-4">
          <div className="col-lg-5">
            <img className="img-fluid rounded" style={{ width: '420px' }} src="https://indephysio.com//assets/img/physiotherapy.jpg" alt="Physiotherapy" />
          </div>
          <div className="col-lg-7">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
            <h1 className="display-5 mb-4"><b>We Help Our Clients to work as a physio in Germany</b></h1>
            <p className="mb-4">Inde Physio is an innovative business developed by a team of Indian Physiotherapists in Germany. The field of physiotherapy has been rapidly growing in India in recent years. However, many Indian physiotherapists are still unaware of the opportunities available to them in foreign countries. Germany, for instance, offers excellent prospects for Indian physiotherapists looking to work abroad.</p>
            <div className="border rounded p-4">
              <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className={`nav-link fw-semi-bold ${activeTab === 'nav-story' ? 'active' : ''}`} id="nav-story-tab" onClick={() => handleTabClick('nav-story')} type="button" role="tab" aria-controls="nav-story" aria-selected="true">Story</button>
                  <button className={`nav-link fw-semi-bold ${activeTab === 'nav-mission' ? 'active' : ''}`} id="nav-mission-tab" onClick={() => handleTabClick('nav-mission')} type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Mission</button>
                  <button className={`nav-link fw-semi-bold ${activeTab === 'nav-vision' ? 'active' : ''}`} id="nav-vision-tab" onClick={() => handleTabClick('nav-vision')} type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Vision</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className={`tab-pane fade ${activeTab === 'nav-story' ? 'show active' : ''}`} id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                  <p>As we are bringing an unexplored Physiotherapy market to India, that is Germany. This program may take a year and above to complete, so while you are still in the finishing stage of your education, you can start preparing yourself to become a Physiotherapist in Germany.</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 'nav-mission' ? 'show active' : ''}`} id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <p>To provide better opportunities to Indian Physiotherapists in finding a better career path and at the same time fill the gap in the physiotherapy workforce in the German healthcare sector.</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 'nav-vision' ? 'show active' : ''}`} id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                  <p>To find your dream job in Germany as a physiotherapist.<br></br>

                  To support the Physio Employers in Germany with fulfilling their job vacancies.<br></br>

                  To throw more light on the higher education opportunities for Indian Physiotherapists in Germany.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded p-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-times text-white"></i>
                  </div>
                  <div className="ps-3">
                  <FontAwesomeIcon icon={faTimes}  style={{color: 'blue'}}/> {/* Cross icon */}
                    <h4>No Hidden Cost</h4>
                    <span>Our charges are totally transparent and most affordable</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-3">
                  <FontAwesomeIcon icon={faUsers}  style={{color: 'blue'}}/> {/* Group icon */}
                    <h4>Dedicated Team</h4>
                    <span>Our experts to guide you through all the process</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ps-3">
                  <FontAwesomeIcon icon={faPhone} style={{color: 'blue'}}/> {/* Call icon */}
                    <h4>Request callback</h4>
                    <span>Whatsapp us anytime and request a call back</span>
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

export default AboutComponent;