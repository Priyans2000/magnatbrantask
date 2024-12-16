
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FaUser  } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopMenu = () => {
  return (
    <>
      <Navbar
        expand="lg"
        id="nav"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "2",
          backgroundColor: "darkred", // or use the hex code "#8B0000"
          color: "white", // Adjust text color if needed
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="text-white"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="shop" className="text-white">Shope</Nav.Link>
              <Nav.Link as={Link} to="search" className="text-white">Search</Nav.Link>
              <Nav.Link as={Link} to="men" className="text-white">Men</Nav.Link>
              <Nav.Link as={Link} to="women" className="text-white">Women</Nav.Link>
              <Nav.Link as={Link} to="kids" className="text-white">Kids</Nav.Link>
              <Nav.Link as={Link} to="cart" className="text-white">Cart</Nav.Link>
              <Nav.Link as={Link} to="contact" className="text-white">Contact us</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="men">Mens</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="women">Womens</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="kids">Kids</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="all">All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#login" className="text-white">
                <FaUser  />
              </Nav.Link>
              <Nav.Link href="#cart" className="text-white">
                <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenu;