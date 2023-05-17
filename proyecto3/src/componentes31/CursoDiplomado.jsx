import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CursoDiplomado() {
    return (<div className='text-center'>
        <h1>Cursos y Diplomados</h1>
        <CardGroup>
            <Card className="bg-dark text-white">
                <Card.Img src="../src/assets/foto-principal.png" alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="../src/assets/foto-principal.png" alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </CardGroup>
        </div>
    )
}

export default CursoDiplomado