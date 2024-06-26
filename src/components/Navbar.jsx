import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function NavScrollExample() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleMouseEnter = (index) => {
    setIsOverlayVisible(true);
    setSelectedNavItem(index);
  };

  const handleMouseLeave = () => {
    setIsOverlayVisible(false);
    setSelectedNavItem(null);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white px-5">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navtabs d-flex w-100 justify-content-around " navbarScroll>
            <Nav.Link as={Link} to="/" className="navicons bold nav-dropdown">Home</Nav.Link>

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Adventure</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/surfing">Surfing</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/kayaking">Kayaking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Places</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/religious-places">Religious Places</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/historical-places">Historical Places</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item} className="nav-dropdown">
                <Dropdown.Toggle as={Nav.Link} className="navicons bold">Stays</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/homestays">Homestays</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/resorts">Resorts</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Navbar.Brand href="/" className="mx-auto logo-container">
                <img
                  src={logo}
                  width="150"
                  height="100"
                  className="logoImg"
                  alt="Logo"
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {isOverlayVisible && (
          <div className="overlay" onMouseLeave={handleMouseLeave}>
            blah blah blah
          </div>
        )}
      </Navbar>
    </>
  );
}

export default NavScrollExample;
