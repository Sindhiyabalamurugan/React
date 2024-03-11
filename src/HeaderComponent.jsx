import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function HeaderComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [atTop, setAtTop] = useState(true); // Track if user is at top of the page

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
      setAtTop(scrollPosition === 0); // Check if user is at the top of the page
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <Navbar expand="lg" fixed="top" className="px-0" style={{ backgroundColor: scrolled ? 'white' : 'transparent', marginTop: scrolled ? '0' : '50px', zIndex: '1000', transition: 'all 0.3s ease-in-out' }}>
          {!isMobile && (
            <div className={`container contact-info py-2 position-fixed bg-transparent ${scrolled ? 'd-none' : ''}`} >
              <div className="w-100 d-flex justify-content-between align-items-center">
                <div className="px-3 px-lg-5 text-start">
                  <small>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                    Mittelstraße 10 61169 Friedberg (Hessen), Germany.
                  </small>
                </div>
                <div className="px-3 px-lg-5 text-end">
                  <small>
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2" />
                    +91 98946 04603
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2" />
                    +49 1764 1717 496
                  </small>
                </div>
              </div>
            </div>
          )}
          <Navbar.Brand href="/" className="ms-4 ms-lg-0">
            <img className={`w-100 ${scrolled ? 'py-2' : ''}`} style={{ width: '100%', paddingTop: '15px', transition: 'padding 0.3s ease-in-out' }} src="https://indephysio.com//assets/img/Inde Physio Main Logo.png" alt="Image" />
          </Navbar.Brand>
          <Nav className={`ms-auto align-items-center d-flex ${scrolled ? 'text-dark' : 'text-white'}`}>
            <Nav.Link href="/signup" className={`nav-link ${scrolled ? '' : 'text-white'}`} style={{ cursor: atTop ? 'pointer' : 'auto' }}>Referral</Nav.Link>
            <Nav.Link href="/dashboard" className={`nav-link ${scrolled ? '' : 'text-white'}`} style={{ cursor: atTop ? 'pointer' : 'auto' }}>Dashboard</Nav.Link>
            <Button href="https://indephysio.com/Admin/articles" className={`btn btn-primary ${scrolled ? '' : 'text-white'}`}>Read Articles</Button>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderComponent;