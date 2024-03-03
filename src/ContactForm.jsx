import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        qualification: '',
        college: '',
        graduation: '',
        languagelevel: '',
        experience: '',
        currentaddress: '',
        permanentaddress: '',
        reference: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          mobile: e.target.mobile.value,
          dob: e.target.dob.value,
          qualification: e.target.qualification.value,
          college: e.target.college.value,
          graduation: e.target.graduation.value,
          languagelevel: e.target.languagelevel.value,
          experience: e.target.experience.value,
          currentaddress: e.target.currentaddress.value,
          permanentaddress: e.target.permanentaddress.value,
          reference: e.target.reference.value
        };
      
        try {
          const response = await fetch('http://inde.physioplustech.in/add_form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const responseData = await response.json();
          console.log(responseData); // Log response from server
      
          // Reset form fields after successful submission
          e.target.reset();
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container-xxl py-5 webi">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>
                        <br /><br /><br /><br /><br />
                        <h1 className="display-5 mb-4">Enroll now and choose a better career</h1>
                        <form onSubmit={handleSubmit} id="form" role="form" noValidate>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" pattern="[a-zA-Z ]+" required />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Contact No" pattern="[0-9]*" required />
                                        <label htmlFor="mobile">Contact No</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
                                        <label htmlFor="dob">Date of Birth</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" required />
                                        <label htmlFor="qualification">Qualification</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="college" name="college" value={formData.college} onChange={handleChange} placeholder="Name of the College and University" required />
                                        <label htmlFor="college">Name of the College and University</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="graduation" name="graduation" value={formData.graduation} onChange={handleChange} placeholder="Year of Graduation" pattern="[0-9]*" required />
                                        <label htmlFor="graduation">Year of Graduation</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-floating">
                                        <select className="form-control" id="languagelevel" name="languagelevel" value={formData.languagelevel} onChange={handleChange} required>
                                            <option value="">--Select German Proficiency--</option>
                                            <option value="A1">A1</option>
                                            <option value="A2">A2</option>
                                            <option value="B1">B1</option>
                                            <option value="B2">B2</option>
                                            <option value="none">None</option>
                                        </select>
                                        <label htmlFor="languagelevel">Select German Proficiency</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" pattern="[0-9]*" required />
                                        <label htmlFor="experience">Experience</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="currentaddress" name="currentaddress" value={formData.currentaddress} onChange={handleChange} placeholder="Your Current Address" required />
                                        <label htmlFor="currentaddress">Current Address</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="permanentaddress" name="permanentaddress" value={formData.permanentaddress} onChange={handleChange} placeholder="Your Permanent Address" required />
                                        <label htmlFor="permanentaddress">Permanent Address</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="reference" name="reference" value={formData.reference} onChange={handleChange} placeholder="References" />
                                        <label htmlFor="reference">Reference (How do you know about us?)</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-5" type="submit">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;