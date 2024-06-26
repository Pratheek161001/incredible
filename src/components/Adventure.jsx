import React, { useState } from 'react';
import './Traditions.css';
import kayaking1 from './crousels/crousel assets/kayaking 1.jpg'
import kayaking2 from './crousels/crousel assets/kayaking 2.jpg'
import kayaking3 from './crousels/crousel assets/kayaking 3.jpg'
import ContactInfo from './EndPage';


const traditionsData = {
    
    kayaking1: {
      img: kayaking1,
      description: 'Kayaking is a popular water sport involving paddling using a double-bladed oar and a small boat known as a kayak.',
    },
    kayaking2: {
      img: kayaking2,
      description: 'Kayaking in serene waters offers both adventure and relaxation, surrounded by beautiful natural landscapes.',
    },
    kayaking3: {
      img: kayaking3,
      description: 'Kayaking in turbulent waters provides an adrenaline rush and a challenging experience for adventure seekers.',
    },
    
  };
  
  const Adventure = () => {
    const [modalData, setModalData] = useState(null);
  
    const openModal = (key) => {
      setModalData(traditionsData[key]);
    };
  
    const closeModal = () => {
      setModalData(null);
    };
  
    return (
      <div className="traditions-container">
        {Object.keys(traditionsData).map((key) => (
          <div className="tradition-card" key={key} onClick={() => openModal(key)}>
            <div className="tradition-image">
              <img src={traditionsData[key].img} alt={key} />
              <div className="image-overlay">
                <span>{key.charAt(0).toUpperCase() + key.slice(1).replace(/[0-9]/g, '')}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="kayakingtext">
        Kayaking in Mangalore is a serene adventure, navigating through tranquil backwaters surrounded by lush greenery. As the sun sets, the golden hues reflect on the water, creating a picturesque scene that captures the essence of nature's tranquility.
        </div>
  
        {modalData && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <div className="modal-image">
                <img src={modalData.img} alt="Modal" />
              </div>
              <div className="modal-description">
                <p>{modalData.description}</p>
              </div>
            </div>
          </div>
        )}
              <ContactInfo/>

      </div>
    );
  };
  
  export default Adventure;