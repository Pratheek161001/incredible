import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const ContactInfo = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Row>
        <Col>
          <h2>Contact Information</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Email:</strong> support@nikil.com
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone:</strong> +#########
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Address:</strong> Basic address
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h2>Helplines</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Customer Service:</strong> +#######
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Technical Support:</strong> +#########
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Emergency:</strong> +102
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
