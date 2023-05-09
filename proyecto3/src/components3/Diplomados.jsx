import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Diplomados() {
    return (
        <>
            <Container className="text-center">
                <h1>Cursos, Diplomados y Certificaciones</h1>
            </Container >
            <Container className="d-flex w-100 justify-content-center g-20" style={{ height: '140px' }} >
                <Card className="bg-dark text-white w-100">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                        <Card.Title className="text-center">TEXT Area</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white w-100 align-items-center">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                        <Card.Title className="text-center">TEXT Area</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </>
    )
}

export default Diplomados