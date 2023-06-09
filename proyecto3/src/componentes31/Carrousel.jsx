import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './modules/style.css'

function Carrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className="carousel-height" activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/foto-principal.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/foto-principal.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/foto-principal.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrousel