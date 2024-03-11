import React, { useState } from 'react';

function GermanJob() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    typeofposition: '',
    staff: '',
    curteam: '',
    experience: '',
    averagetime: '',
    patienttype: '',
    license: '',
    policy: '',
    additionalinformation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://inde.physioplustech.in/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear form fields after submission if needed
        setFormData({
          name: '',
          email: '',
          mobile: '',
          company: '',
          typeofposition: '',
          staff: '',
          curteam: '',
          experience: '',
          averagetime: '',
          patienttype: '',
          license: '',
          policy: '',
          additionalinformation: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container-xxl py-5 webi">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <br /><br /><br /><br /><br />
            <h1 className="display-5 mb-4" style={{ fontWeight: 'bold', alignItems: 'left' }}>Stellenangebot Ankündigung</h1>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name">Name des Anwerbers</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email">Mindestens 2 E-Mail-Adressen auflisten</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} required />
                    <label htmlFor="mobile">Geben Sie mindestens 2 Telefonnummern oder mehrere Telefonnummern an</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} required />
                    <label htmlFor="company">Name der beschäftigenden Firma oder Klinik oder Reha oder Praxis</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="typeofposition" name="typeofposition" placeholder="Your Type of Position" value={formData.typeofposition} onChange={handleChange} required />
                    <label htmlFor="typeofposition">Art der Stelle</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="staff" name="staff" placeholder="Your Staff" value={formData.staff} onChange={handleChange} required />
                    <label htmlFor="staff">Auflistung eines oder mehrerer Orte, an denen Personal eingestellt werden soll</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="curteam" name="curteam" placeholder="Your Current Team" value={formData.curteam} onChange={handleChange} required />
                    <label htmlFor="curteam">Wie groß ist Ihr derzeitiges Team?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="experience" name="experience" placeholder="Your Experience" value={formData.experience} onChange={handleChange} required />
                    <label htmlFor="experience">Erfahrungen der Kandidaten</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="averagetime" name="averagetime" placeholder="Your Average Time" value={formData.averagetime} onChange={handleChange} required />
                    <label htmlFor="averagetime">Wie lange ist Ihr Behandlungszeit in Durchschnitt?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="patienttype" name="patienttype" placeholder="Your Patient Type" value={formData.patienttype} onChange={handleChange} required />
                    <label htmlFor="patienttype">Was ist Ihr durchschnittlicher Patiententyp?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="license" name="license" placeholder="Your License" value={formData.license} onChange={handleChange} required />
                    <label htmlFor="license">Ist der Führerschein ein Muss für den Bewerber?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="policy" name="policy" placeholder="Your Policy" value={formData.policy} onChange={handleChange} required />
                    <label htmlFor="policy">Können Sie kurze Angaben zu Ihrer Politik in den Bereichen Urlaub, Fortbildung machen?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="additionalinformation" name="additionalinformation" placeholder="Your Additional Information" value={formData.additionalinformation} onChange={handleChange} required />
                    <label htmlFor="additionalinformation">Gibt es zusätzliche Informationen, die Sie uns mitteilen oder Fragen möchten?</label>
</div>
</div>
</div>
<button className="btn btn-primary py-3 px-5 mt-3" type="submit">Send Message</button>
</form>
</div>
</div>
</div>
</div>
);
}

export default GermanJob;
