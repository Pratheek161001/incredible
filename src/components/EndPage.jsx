import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import logo from '../assets/Logo.png';
import './EndPage.css';
import instagramlogo from './crousels/crousel assets/logo-instagram-4096.png'
import facebooklogo from './crousels/crousel assets/facebooklogo.png'
import twitterlogo from './crousels/crousel assets/twitterlogo.png'
import youtubelogo from './crousels/crousel assets/youtube-logo-9.png'

const ContactInfo = () => {
  return (
    <Container fluid className="bg-blue py-0" >
      <Row>
        
        <Col style={{display:'flex',alignItems:'center',padding:'40px',gap:'5px',justifyContent:'center'}}>

          <ListGroup variant="flush" className="bg-blue">
            <ListGroup.Item className=" border-0">
              <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                <img src={facebooklogo} alt="Facebook" style={{width:'80px'}} />
              </a>
            </ListGroup.Item>
            <ListGroup.Item className=" border-0">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                <img src={twitterlogo} alt="Twitter" style={{width:'80px'}}/>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className=" border-0">
              <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
                <img src={instagramlogo} alt="Instagram" style={{width:'80px'}} />
              </a>
            </ListGroup.Item>
            <ListGroup.Item className=" border-0">
              <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
                <img src={youtubelogo} alt="LinkedIn" style={{width:'80px'}}/>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col style={{display:'flex',alignItems:'center',padding:'40px',gap:'30px'}}>
          <h2>Incredible Mangalore</h2>
          <img src={logo} alt="Incredible Mangalore Logo" style={{width:'140px',}} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;



