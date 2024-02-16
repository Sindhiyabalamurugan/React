import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import './Projects.css';

function CityCard({ imageSrc, cityName }) {
  return (
    <div className="project-item pe-5 pb-5 hover-effect">
      <div className="project-img mb-3">
        <img className="img-fluid rounded" src={imageSrc} alt={cityName} />
        <a href="#"><BiChevronRight className="bi-link fa-3x text-primary" /></a>
      </div>
      <div className="project-title">
        <h4 className="mb-0">{cityName}</h4>
      </div>
    </div>
  );
}

function Projects() {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display only one slide for mobile view
        }
      }
    ]
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3"><b>Recommended Job Sites</b></p>
          <h1 className="display-5 mb-5"><b>Our recommended Cities and locations for Job search</b></h1>
        </div>
        <Slider ref={slider} {...settings}>
          <CityCard imageSrc="https://indephysio.com//assets/img/114.jpg" cityName="Berlin" />
          <CityCard imageSrc="https://indephysio.com//assets/img/115.jpg" cityName="Stuttgart" />
          <CityCard imageSrc="https://indephysio.com//assets/img/116.jpg" cityName="Koln" />
          <CityCard imageSrc="https://indephysio.com//assets/img/117.jpg" cityName="Hamburg" />
          <CityCard imageSrc="https://indephysio.com//assets/img/11.jpg" cityName="Frankfurt" />
          <CityCard imageSrc="https://indephysio.com//assets/img/112.jpg" cityName="Munich" />
          <CityCard imageSrc="https://indephysio.com//assets/img/113.jpg" cityName="Heidelberg" />
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary mx-2" onClick={() => slider.current.slickPrev()}><BiChevronLeft /></button>
          <button className="btn btn-primary mx-2" onClick={() => slider.current.slickNext()}><BiChevronRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Projects;