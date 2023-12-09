import Homeimage1 from "./home2.jpg";
import Homeimage2 from "./home-banner.jpg";
import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
const SliderImage = () => {
  return (
    <Carousel fade className="slide-container">
      <Carousel.Item className="image-container">
        <img
          className="d-block w-100 headerImage"
          src={Homeimage1}
          alt="Second slide"
        />
        <Carousel.Caption className="imagetext">
          <h2>Partnering with businesses on solving technological problems.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image-container">
        <img
          className="d-block w-100 servicesImage"
          src={Homeimage2}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default SliderImage;
