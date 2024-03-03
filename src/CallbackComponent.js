import React, { useState } from 'react';

function CallbackComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    description: ''
  });

  const isNumberKey = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend
    fetch('http://inde.physioplustech.in/submit-forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          description: ''
        });
      } else {
        alert('Error submitting form');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form');
    });
  };

  return (
    <div className="container-fluid callback my-5 pt-5">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3"><b>Get In Touch</b></p>
                <h1 className="display-5 mb-5"><b>Request A Call-Back</b></h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your Mobile" onKeyPress={isNumberKey} required />
                      <label htmlFor="mobile">Your Mobile</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="description" name="description" value={formData.description} onChange={handleChange} required style={{ height: '100px' }}></textarea>
                      <label htmlFor="description">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="notRobot" required />
                      <label className="form-check-label" htmlFor="notRobot">
                        I'm not a robot
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary w-100 py-3 blue" type="submit">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallbackComponent;