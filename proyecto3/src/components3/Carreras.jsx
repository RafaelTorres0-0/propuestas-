import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Carreras() {
    return (
        <Row xs={1} md={3} className="g-4">

            <Col key={1}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Analisis en Sistemas</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={2}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Ingenieria en Informatica</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={3}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Ingenieria en Produccion</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={4}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Ingenieria Telematica</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={5}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Licenciatura en Fisica</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={6}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Licenciatura en Matematicas</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Carreras;