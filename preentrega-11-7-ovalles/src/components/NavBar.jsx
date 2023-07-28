import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGO DE EMPRESA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>            
            <NavDropdown title="OPCIONES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">RESEÑAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                UBICACION
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;