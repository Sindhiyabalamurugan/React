import React from 'react';
import './WebinarComponent.css'; // Import CSS file for styling

function WebinarComponent() {
  return (
    <div className="container-fluid callback my-5 pt-5">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white border rounded p-5 p-sm-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center mb-4"> {/* Centering the header */}
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                 <b> Webinar Recording of - Physio Registration Process in Germany</b>
                </p>
              </div>
              <div className="iframeVideo">
                <iframe
                  className="videoFrame" // Added a class for styling
                  width="590"
                  height="315"
                  src="https://www.youtube.com/embed/r88cL3CtOls"
                  title="Physio Registration in Germany - March 8th 2023 Webinar Recording for Physio Jobs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebinarComponent;