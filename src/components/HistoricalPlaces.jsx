import React from 'react'
import sulthan from './crousels/crousel assets/sulthan batteri.jpg';
import aloysius from './crousels/crousel assets/Aloysius chapel.jpg'
import museum from './crousels/crousel assets/bejai church.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ReligiousPlaces.css';
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import ContactInfo from './EndPage';

const HistoricalPlaces = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setModalContent(card);
    setShow(true);
  };

  const cards = [
    {
        title: 'Bejai museum',
        imgSrc: museum,
        description: 'Discover Bejai Museum: an enthralling collection of historical artifacts and cultural exhibits.',
        additionalInfo: 'Bejai Museum in Mangalore, nestled amid lush surroundings, offers a captivating glimpse into the regions history. It features intricate artifacts, traditional art, and cultural exhibits, making it a treasure trove for history enthusiasts and art lovers alike.',
        location: '//maps.app.goo.gl/fb3hcXuanYCv6rj29?g_st=ac'
      },
      {
        title: 'St Aloysius chapel',
        imgSrc: aloysius,
        description: 'Discover the awe-inspiring St. Aloysius Chapel: renowned for its stunning frescoes and profound spiritual ambiance.',
        additionalInfo: 'St. Aloysius Chapel in Mangalore is a breathtaking marvel, adorned with stunning frescoes and intricate paintings. Its serene ambiance and exquisite artistry make it a spiritual haven and an architectural gem, captivating every visitor.',
        location: 'https://maps.app.goo.gl/Mpj68XDepQXxJj3y7?g_st=ac'
      },
      {
        title: 'Sulthan battery',
        imgSrc: sulthan,
        description: 'Explore Sulthan Battery: a historical fort offering a glimpse into the rich cultural heritage of Karnataka.',
        additionalInfo: 'Sultan Battery in Mangalore is a historic watchtower built by Tipu Sultan. Made from black stones, it offers panoramic views of the Gurupura River. Originally intended to thwart naval attacks, its now a popular tourist spot.',
        location: 'https://maps.app.goo.gl/3NaKcee6a4GSjtzk9?g_st=ac'

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

export default HistoricalPlaces