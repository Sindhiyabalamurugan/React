// import {HeartFill} from 'bootstrap-icons';
// function Testing(){
//     return(
//         // <div style={{margin:'39% 10% 10% 90%',backgroundColor:'white',position:'fixed' }}>
//         //     <FontAwesomeIcon icon={faCircleArrowUp} style={{color:'blue', height:'6%',width:'6%', }}/>
//         //     <p>HelloWorld</p>
//         // </div>
//         <div>

        
//         <div class="btn btn-lg btn-primary btn-lg-square rounded-circle" style={{position: "fixed", right: "30px", "bottom": "30px", zIndex: "99"}}>
//             <HeartFill/>
//         </div>
//         </div>
//     );
// }

// export default Testing;


// YourComponent.jsx
import React, { useState, useEffect } from 'react';

const Testing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to track scroll position
    const handleScroll = () => {
      // Check if user has scrolled down certain amount (e.g., 100 pixels)
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      
      {isVisible && (
        <div onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" style={{ position: "fixed", right: "30px", bottom: "30px", zIndex: "99" }}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default Testing;
