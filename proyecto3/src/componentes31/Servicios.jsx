import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const Servicios = () => {
    const cardsData = [
        {
            title: "SEDUCLA",
            imageSrc: "../src/assets/seducla.png",
        },
        {
            title: "BIBCyT",
            imageSrc: "../src/assets/bibcyt.png",
        },
        {
            title: "CTIC",
            imageSrc: "../src/assets/ctic.png",
        },
        {
            title: "Registro Académico",
            imageSrc: "../src/assets/registro.png",
        },
    ];

    return (
        <div className='text-center pt-4'>
            <h2>Servicios</h2>
            <Row xs={1} md={4} className="g-4">
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <Card>
                            <NavLink to={`/servicio/${card.title}`} className="nav-link-unstyled">
                                <Card.Body className="text-center">
                                    <Card.Title >{card.title}</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={card.imageSrc} />
                            </NavLink>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Servicios;
