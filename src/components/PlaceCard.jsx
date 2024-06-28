import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyle = {
  width: '18rem',
  margin: '0 10px',
  backgroundColor: 'white',
  color: 'slategray',
  border: '1px solid lightgray',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px'
};

const cardTextStyle = { backgroundColor: 'white', color: 'black' };

function PlaceCard({ image, title, text, link }) {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text style={cardTextStyle}>{text}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">View in Maps</Button>
      </Card.Body>
    </Card>
  );
}

export default PlaceCard;
