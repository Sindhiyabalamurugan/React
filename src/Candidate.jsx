import React from 'react';
import './Candidate.css'; // Import CSS file for styling
import Logo from './IndePhysio.png';
import Logo1 from './logocandidate.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from react-fontawesome
import { faFileAlt, faFileInvoice, faBook, faBriefcase, faBell, faSignOutAlt, faCog, faQuestionCircle , faPlane,faBars, faLock, faMapMarker, faCircle} from '@fortawesome/free-solid-svg-icons'; // Import icons from font-awesome library
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Location from './Location1.png';

const Candidate = () => {
  const { candidateId } = useParams();
  const [candidateDetails, setCandidateDetails] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const iconStyles = {
    fileAlt: { color: '#007bff', fontSize: '24px', marginRight: '10px' },
    fileInvoice: { color: '#28a745', fontSize: '24px', marginRight: '10px' },
    book: { color: '#dc3545', fontSize: '24px', marginRight: '10px' },
    briefcase: { color: '#ffc107', fontSize: '24px', marginRight: '10px' },
    bell: { color: '#17a2b8', fontSize: '24px', marginRight: '10px' },
    signOutAlt: { color: '#6610f2', fontSize: '24px', marginRight: '10px' },
    cog: { color: '#6c757d', fontSize: '24px', marginRight: '10px' },
    questionCircle: { color: '#fd7e14', fontSize: '24px', marginRight: '10px' }
  };

  const liStyle = { fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center' }; 

  const data = [
    "A1 ",
    "A2 ",
    "B1 ",
    "B2 ",
    "Document",
    "Translation",
    "Application",
    "Evaluation",
    "Interview",
    "Recognition",
    "Contract",
    "Visa",
    "Relocation"
  ];

  const renderImages = () => {
    const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
    if (isMobile) {
      const rows = [];
      for (let i = 0; i < data.length; i += 4) {
        rows.push(data.slice(i, i + 4));
      }

      return rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item, index) => (
            <div key={index} className="column">
              <p style={{ margin: "0" }}>{item}</p>
              <div style={{ width: "0" }}>
                <img
                
                  alt={`Location Icon ${index}`}
                  src={Location}
                  style={{ maxHeight: "40px", maxWidth: "40px" }}
                /> 
              </div>
            </div>
          ))}
        </div>
      ));
    } else {
      return data.map((item, index) => {
        const isOdd = index % 2 !== 0;
        const imageStyle = {
          maxHeight: "50px",
          maxWidth: "50px",
          transform: isOdd ? "none" : "rotate(180deg)",
          marginTop: isOdd ? "0" : "-45px", // Set negative margin top for even images
          marginBottom: "-60px" // Set negative margin bottom for both even and odd images
        };
        return (
          <div key={index} style={{ display: "inline-block", textAlign: "center" }}>
            <p style={{ margin: "0" }}>{item}</p>
            <div style={{ width: "50px", marginTop: isOdd ? "-120px":"0" }}>
              <img 
                src={Location} 
                alt={`Location Icon ${index}`} 
                style={imageStyle} 
              />
            </div>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        const response = await fetch(`http://inde.physioplustech.in/candidate/${candidateId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch candidate details');
        }
        const data = await response.json();
        setCandidateDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCandidateDetails();
  }, [candidateId]);

  // State for toggling the display of the menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {candidateDetails ? (
        <div className="candidate">
          <div className="dashboard1">
           
            {/* Dashboard menu */}
            <header>
  <nav className="dashboard-menu">
    
                <ul className={showMenu ? "dashboard-menu show" : "dashboard-menu"}>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faFileAlt} style={iconStyles.fileAlt} /> Documents</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faFileInvoice} style={iconStyles.fileInvoice} /> Invoices</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faBook} style={iconStyles.book} /> Learn German</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faBriefcase} style={iconStyles.briefcase} /> Job Listings</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faBell} style={iconStyles.bell} /> Notifications</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faSignOutAlt} style={iconStyles.signOutAlt} /> Logout</li>
              <li style={{ ...liStyle, marginRight: '10px' }}><FontAwesomeIcon icon={faCog} style={iconStyles.cog} /> Settings</li>
              <li style={liStyle}><FontAwesomeIcon icon={faQuestionCircle} style={iconStyles.questionCircle} /> Help</li>
            </ul>
  </nav>
</header>
          </div>
          <div className="candidate-info">
  <h2>Hi, {candidateDetails.candidate_full_name} ! </h2>
  <div className='row'>
    <div className="info-boxes">
      <div className="info-box1">
        <span className="info-text" style={{ fontSize: '24px', textAlign: 'center', top: "100px" }}>REGISTERED</span>
        <br />
        <FontAwesomeIcon icon={faPlane} style={{ color: "white", fontSize: "20px", marginTop: "5px" }} />Approximately D.O.B 365 days to go
        <span className="info-text" style={{ fontSize: '20px', textAlign: 'center', top: "250px" }}></span>
      </div>
      <div className="info-box2">
        <span className="info-text" style={{ fontSize: '24px', textAlign: 'center', top: "100px" }}></span>
        <FontAwesomeIcon icon={faLock} style={{ color: 'white', fontSize: '160px' }} />
      </div>
      <div className="info-box3">
        <span className="info-text" style={{ fontSize: '24px', textAlign: 'center', top: "100px" }}></span>
        <FontAwesomeIcon icon={faLock} style={{ color: 'white', fontSize: '160px' }} />
      </div>
    </div>
  </div>
  <div className='row'>
    <div className="bottom-box" style={{ Height: "300px" }}>
      <h5 className="title">
        Pathway Timeline
      </h5>
      <div className="location-icons">
        {renderImages()}
      </div>
    </div>
  </div>
</div>
</div>
) : (
<p>Loading candidate details...</p>
)}
</div>
);
};

export default Candidate;
