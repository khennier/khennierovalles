import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'
import useCart from './Cart/useCart';

function NavBar() {
  const {products} = useCart()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>LOGO DE EMPRESA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>INICIO</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>            
            <NavDropdown title="OPCIONES" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>OFERTAS</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/vendidos'>
                MAS VENDIDOS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/'>
                TODOS LOS PRODUCTOS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/Cart.jsx'><CartWidget /><div>{products.length}</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;