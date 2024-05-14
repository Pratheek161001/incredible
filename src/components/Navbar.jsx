import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import { ReactComponent as MySVG } from '../assets/search.svg';
import './Navbar.css';

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
      <Navbar className="bg-body-tertiary">
        <Container className="logo-container">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        <Form className="d-flex searchbar">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
          />
          <Button variant="outline-success" className="hover-trigger">
            <MySVG />
          </Button>
        </Form>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Container>
              <Nav className="me-auto my-2 my-lg-0 navtabs" navbarScroll>
                {[
                  'Religious Places',
                  'Historical Places',
                  'Surfing',
                  'Kayaking',
                  'Homestays',
                  'Resorts',
                  'Way to reach',
                  'Traditions',
                  'Agri Tourism',
                ].map((item, index) => (
                  <Nav.Link
                    key={index}
                    href={`#action${index + 1}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="navicons"
                    style={{
                      color: selectedNavItem === index ? '#555' : '#333',
                    }}
                  >
                    {item}
                  </Nav.Link>
                ))}
              </Nav>
            </Container>
            {isOverlayVisible && (
              <div className="overlay" onMouseLeave={handleMouseLeave}>
                blah blah blah
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
