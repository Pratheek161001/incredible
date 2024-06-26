import React from 'react'
import room1 from './crousels/crousel assets/Room - Google Maps_files/726e6211_z.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ReligiousPlaces.css';
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import ContactInfo from './EndPage';

const Homestays = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setModalContent(card);
    setShow(true);
  };

  const cards = [
    {
        title: 'Blue Lagoon Homestays',
        imgSrc: room1,
        description: '3QPJ+RQM, Kolachikambla Rd, Karnad, Mulki, Hejamadi, Karnataka Ratings : 4.9 (20)',
        additionalInfo: '3QPJ+RQM, Kolachikambla Rd, Karnad, Mulki, Hejamadi, Karnataka Ratings : 4.9 (20) ',
        location: 'https://www.google.com/maps/place/BLUE+LAGOON+HOMESTAY/@13.0870384,74.7824431,17z/data=!4m9!3m8!1s0x3bbcad0066172fdf:0x815380ba8639bc33!5m2!4m1!1i2!8m2!3d13.0870852!4d74.7819277!16s%2Fg%2F11vrk3q6y8?entry=ttu'
      }
    ];
  return (
    <div className="religiousplaces">
    {cards.map((card, index) => (
      <Card key={index} className="custom-card">
        <Card.Img variant="top" src={card.imgSrc} />
        <Card.Body>
          <Card.Title><h2>{card.title}</h2></Card.Title>
          <Card.Text style={{backgroundColor: 'white', color: 'black'}}>
            {card.description}
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow(card)}>Know more</Button>
        </Card.Body>
      </Card>
    ))}

    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{modalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-content">
          <div className="modal-description">
            <p>{modalContent.additionalInfo}</p>
            <a href={modalContent.location} target="_blank" rel="noopener noreferrer">View on Map</a>
          </div>
          <img src={modalContent.imgSrc} alt={modalContent.title} className="modal-image" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    <ContactInfo/>
  </div>
  )
}

export default Homestays