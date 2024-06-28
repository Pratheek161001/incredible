import React, { useState } from 'react';
import './Traditions.css';
import surfing1 from './crousels/crousel assets/surfing 1.jpg';
import surfing3 from './crousels/crousel assets/surfing 3.jpg';
import surfing4 from './crousels/crousel assets/surfing 4.jpg';
import sasihithlu from './crousels/crousel assets/sasihithlu beach.jpg';
import panambur from './crousels/crousel assets/panambur beach.jpg';
import nitkbeach from './crousels/crousel assets/NITK beach.jpg';
import tannirbhavi from './crousels/crousel assets/tannirbhavi beach.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ReligiousPlaces.css';
import { Modal } from 'react-bootstrap';
import ContactInfo from './EndPage';

const Surfing = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };

  const traditionsData = {
    kayaking1: {
      img: surfing1,
      description: 'Experience the thrill of surfing on pristine waves at our stunning beaches.',
    },

    kayaking3: {
      img: surfing3,
      description: 'Experience the thrill of surfing on pristine waves at our stunning beaches.',
    },
    kayaking4: {
      img: surfing4,
      description: 'Experience the thrill of surfing on pristine waves at our stunning beaches.',
    },
  };

  const cards = [
    {
      title: 'Sasihithlu Beach',
      imgSrc: sasihithlu,
      description: 'Unveil the hidden gem of Sasihithlu Beach with crystal-clear waters and lush greenery.',
      additionalInfo: 'Unveil the hidden gem of Sasihithlu Beach with crystal-clear waters and lush greenery.',
      location: 'https://maps.app.goo.gl/zVrzMG95xjpcRb388?g_st=ac',
    },
    {
      title: 'Panambur Beach',
      imgSrc: panambur,
      description: 'Explore the beauty of Panambur Beach with golden sands and vibrant sunsets.',
      additionalInfo: 'Explore the beauty of Panambur Beach with golden sands and vibrant sunsets.',
      location: 'https://maps.app.goo.gl/4a64C1yhWCV3phpP6?g_st=ac',
    },
    {
      title: 'Surathkal Beach',
      imgSrc: nitkbeach,
      description: 'Enjoy the serene ambiance of NITK Beach, a must-visit for relaxation.',
      additionalInfo: 'Enjoy the serene ambiance of NITK Beach, a must-visit for relaxation.',
      location: 'https://maps.app.goo.gl/AU9iuGodKQaz75S36?g_st=ac',
    },
    {
      title: 'Tannirbhavi Beach',
      imgSrc: tannirbhavi,
      description: 'Discover tranquility at Tannirbhavi Beach, perfect for a peaceful retreat.',
      additionalInfo: 'Discover tranquility at Tannirbhavi Beach, perfect for a peaceful retreat.',
      location: 'https://maps.app.goo.gl/hXYcyYgMhDnsbWnz6?g_st=ac',
    },
  ];

  return (
    <div className="religiousplaces">
      {cards.map((card, index) => (
        <Card key={index} className="custom-card">
          <Card.Img variant="top" src={card.imgSrc} />
          <Card.Body>
            <Card.Title><h2>{card.title}</h2></Card.Title>
            <Card.Text style={{ backgroundColor: 'white', color: 'black' }}>
              {card.description}
            </Card.Text>
            <Button variant="primary" onClick={() => handleShow(card)}>Know more</Button>
          </Card.Body>
        </Card>
      ))}

      <div className="traditions-container">
        {Object.keys(traditionsData).map((key) => (
          <div className="tradition-card" key={key} onClick={() => handleShow(traditionsData[key])}>
            <div className="tradition-image">
              <img src={traditionsData[key].img} alt={key} />
              <div className="image-overlay">
                <span>Surfing</span>
              </div>
            </div>
          </div>
        ))}
        <div className="kayakingtext">
        Surfing in Mangalore is a thrilling experience, with its pristine beaches and consistent waves. The golden sands, warm sun, and clear blue waters create a perfect setting for surfers, blending the excitement of the sport with the beauty of coastal landscapes.
        </div>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title || 'Surfing Image'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-content">
            <div className="modal-description">
              <p>{modalContent.description}</p>
              {modalContent.location && <a href={modalContent.location} target="_blank" rel="noopener noreferrer">View on Map</a>}
            </div>
            <img src={modalContent.imgSrc || modalContent.img} alt={modalContent.title || 'Surfing Image'} className="modal-image" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ContactInfo />
    </div>
  );
};

export default Surfing;
