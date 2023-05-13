import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function SliderP2(){
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/foto-principal.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/foto-principal.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/foto-principal.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default SliderP2