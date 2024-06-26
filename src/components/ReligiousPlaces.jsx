import React from 'react'
import polali from './crousels/crousel assets/polali.jpg'
import kateel from './crousels/crousel assets/kateel.jpg'
import mangaladevi from './crousels/crousel assets/mangaladevi.jpg'
import bappanadu from './crousels/crousel assets/bappanadu.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ReligiousPlaces.css';
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import ContactInfo from './EndPage'

const ReligiousPlaces = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setModalContent(card);
    setShow(true);
  };

  const cards = [
    {
        title: 'Polali',
        imgSrc: polali,
        description: 'Experience divine serenity at Polali Temple, Mangalore: culture, spirituality, tranquility.',
        additionalInfo: 'Polali Rajarajeshwari Temple, situated in Polali, Dakshina Kannada district, Karnataka, dates back to the 8th century AD, commissioned by King Suratha. The main deity is Shri Rajarajeshwari, depicted in a unique clay idol with medicinal properties. The temple showcases Hindu architecture, featuring ornate wooden carvings and copper plates on its roofs. Daily and special poojas are overseen by Head Priest Madhava Bhat. Annual festivities, notably the Polali Chendu festival, celebrate good triumphing over evil through football matches. The month-long March festival draws visitors worldwide.',
        location: 'https://www.google.com/maps?q=polali+temple+mangalore'
      },
      {
        title: 'Bappanadu',
        imgSrc: bappanadu,
        description: 'Discover the divine beauty of Bappanadu Temple in Mangalore: a sanctuary of spirituality, rich history, intricate architecture, and serene surroundings.',
        additionalInfo: 'Bappanadu Temple is renowned for its intricate carvings and historical significance in the region.',
        location: 'https://www.google.com/maps?q=bappanadu+temple+mangalore'
      },
      {
        title: 'Kateel',
        imgSrc: kateel,
        description: 'Discover tranquility at Kateel Temple, Mangalore: spiritual bliss amidst nature.',
        additionalInfo: 'Kateel Temple is located on an island in the middle of the river Nandini and is a famous pilgrimage site.',
        location: 'https://www.google.com/maps?q=kateel+temple+mangalore'
      },
      {
        title: 'Mangaladevi',
        imgSrc: mangaladevi,
        description: 'Experience divine grace at Mangaladevi Temple: heritage, spirituality, peace, Mangalore.',
        additionalInfo: 'Mangaladevi Temple is a historic site and the city of Mangalore is named after this temple.',
        location: 'https://www.google.com/maps?q=mangaladevi+temple+mangalore'
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

export default ReligiousPlaces