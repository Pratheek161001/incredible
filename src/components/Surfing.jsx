import React, { useState } from 'react';
import './Traditions.css';
import surfing1 from './crousels/crousel assets/surfing 1.jpg'
import surfing2 from './crousels/crousel assets/surfing 2.jpg'
import surfing3 from './crousels/crousel assets/surfing 3.jpg'
import surfing4 from './crousels/crousel assets/surfing 4.jpg'
import ContactInfo from './EndPage';


const traditionsData = {
    
    kayaking1: {
      img: surfing1,
      description: 'Kayaking is a popular water sport involving paddling using a double-bladed oar and a small boat known as a kayak.',
    },
    kayaking2: {
      img: surfing2,
      description: 'Kayaking in serene waters offers both adventure and relaxation, surrounded by beautiful natural landscapes.',
    },
    kayaking3: {
        img: surfing3,
        description: 'Kayaking in serene waters offers both adventure and relaxation, surrounded by beautiful natural landscapes.',
      }
    
  };
  
  const Surfing = () => {
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
                <span>Surfing</span>
              </div>
            </div>
          </div>
        ))}

        <div className="kayakingtext">
        Surfing in Mangalore is a thrilling experience, with its pristine beaches and consistent waves. The golden sands, warm sun, and clear blue waters create a perfect setting for surfers, blending the excitement of the sport with the beauty of coastal landscapes.
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
  
  export default Surfing;