import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./modules/MyCarousel.css";

function Diplomado() {
  return (
    <div style={{ width: "30%", margin: "0 auto" }}>
      <Carousel className="my-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/foto-principal.png"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/foto-principal.png"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/assets/foto-principal.png"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="pa">
        <p>Diplomado en Gestión del desarrollo de software</p>
      </div>
    </div>
  );
}

export default Diplomado;
