import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavDropdown title="Carreras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">Análisis de Sistemas</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Ingeniería en Informatica</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Ingeniería en Producción</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">Ingeniería Telemática</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.5">Licenciatura en Matemaáticas</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.6">Licenciatura en Física</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Postgrado" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Informacíon General</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Maestría en Ciencias: Física Matemática</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Maestría en Ciencias: Matemática</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4">Maestría en Ciencias: Optimización</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5">Maestría en Ciencias de la Computación: Ingeniería de Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.6">Maestría en Ciencias de la Computación: Inteligencia Artificial</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.7">Maestría en Ciencias de la Computación: Redes de Computadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.8">Especialización en Sistemas de Información</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SEDUCLA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BIBCyT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CTIC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Registro Académico</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cirsos Diplomados y Certificaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coordinación de Fomento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gestión de desarrollo de software</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;