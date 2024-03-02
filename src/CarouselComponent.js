import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


function CarouselComponent() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    
    <Carousel ref={carouselRef}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://indephysio.com//assets/img/carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-left">
          <div className="container">
            <div className="row justify-content-start">
            <div className="col-lg-8">
  <div className="border border-primary rounded d-inline-block py-1 px-3">
    <p className="d-inline-block text-primary fw-semi-bold mb-0">
      Welcome to Inde Physio
    </p>
  </div>
  <h1 className="display-1 mb-4 slideInDown text-dark text-center">Physio job in Germany</h1>
  <a href="/Admin/job" className="btn btn-primary py-3 px-5 slideInDown">Apply Now</a>
</div>
            </div>
          </div>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://indephysio.com//assets/img/carousel-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="text-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7">
              <h1 className="display-1 mb-4 slideInDown text-dark">Wenn Sie ein Arbeitgeber sind und Physio sucht</h1>
                <a href="https://indephysio.com/Admin/germanjob" className="btn btn-primary py-3 px-5 slideInDown">Klicken Sie hier</a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;