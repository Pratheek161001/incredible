import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './About.css';
import instagramlogo from './crousels/crousel assets/logo-instagram-4096.png'
import facebooklogo from './crousels/crousel assets/facebooklogo.png'
import twitterlogo from './crousels/crousel assets/twitterlogo.png'
import youtubelogo from './crousels/crousel assets/youtube-logo-9.png'

const IncredibleMangalore = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Incredible Mangalore</h1>
          <p>
            Welcome to Mangalore, a vibrant city located on the southwestern coast of India. Known for its stunning beaches, rich cultural heritage, and delicious cuisine, Mangalore offers a perfect blend of tradition and modernity. Whether you're looking to relax by the beach, explore historical sites, or indulge in local delicacies, Mangalore has something for everyone. Discover the charm of this coastal gem and create unforgettable memories.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4" style={{ backgroundColor: '#e6f2ff' }}>
            <Card.Body>
              <Card.Title>Support Contacts</Card.Title>
              <Card.Text>
                For any assistance or inquiries, please reach out to our support team:
              </Card.Text>
              <ul>
                <li>Email: support@mangaloretravel.com</li>
                <li>Phone: +91 12345 67890</li>
                <li>WhatsApp: +91 98765 43210</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4" style={{ backgroundColor: '#e6f2ff' }}>
            <Card.Body>
              <Card.Title>Booking Contact Info</Card.Title>
              <Card.Text>
                To make a booking or for any related inquiries, please contact our booking team:
              </Card.Text>
              <ul>
                <li>Email: booking@mangaloretravel.com</li>
                <li>Phone: +91 12345 67890</li>
                <li>WhatsApp: +91 98765 43210</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="social-links p-1" style={{ backgroundColor: ' #64a8f1', color: '#fff' }}>
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={instagramlogo} alt="Instagram" style={{ width: '120px',marginRight:'10px'  }} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={facebooklogo} alt="Facebook" style={{ width: '120px',marginRight:'10px'  }} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={twitterlogo} alt="Twitter" style={{ width: '120px', marginRight:'10px' }} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={youtubelogo} alt="YouTube" style={{ width: '120px', marginRight:'10px' }} />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IncredibleMangalore;
