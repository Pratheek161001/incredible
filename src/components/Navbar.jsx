import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png';
import './Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

function NavScrollExample() {

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <Container>
      <Navbar expand="lg" className="bg-white px-5 navbar fixed-top">
        <Container fluid>
          <Navbar.Brand onClick={() => handleNavigation('/')} className="logo-container">
            <img
              src={logo}
              width="150"
              height="100"
              className="logoImg"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="me-auto my-2 my-lg-0 navtabs d-flex w-100 justify-content-around align-items-center" navbarScroll>
              <Nav.Link onClick={() => handleNavigation('/')} className="navicons bold nav-dropdown">Home</Nav.Link>
              

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Adventure</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleNavigation('/surfing')}>Surfing</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleNavigation('/kayaking')}>Kayaking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Places</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleNavigation('/religious-places')}>Religious Places</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleNavigation('/historical-places')}>Historical Places</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Stays</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleNavigation('/homestays')}>Homestays</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleNavigation('/resorts')}>Resorts</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link onClick={() => handleNavigation('/about')} className="navicons bold nav-dropdown">About/Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavScrollExample;
