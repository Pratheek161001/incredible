import React, { useState } from 'react';
import './Traditions.css';
import kola from './crousels/crousel assets/WhatsApp Image 2024-06-01 at 11.57.29_e9c80c71.jpg';
import yakshagana from './crousels/crousel assets/WhatsApp Image 2024-06-01 at 11.58.57_5efa3aa6.jpg';
import kambla from './crousels/crousel assets/WhatsApp Image 2024-05-31 at 12.25.49_823b357d.jpg';
import koridakatta from './crousels/crousel assets/kori da katta.avif';

const traditionsData = {
  dhaiva: {
    img: kola,
    description: 'Dhaiva Aaradhane is a traditional ritual of worship in the Tulu Nadu region of Karnataka.',
  },
  kambla: {
    img: kambla,
    description: 'Kambla is a traditional buffalo race held in the southwestern Indian state of Karnataka.',
  },
  kori: {
    img: koridakatta,
    description: 'Kori da Katta is a traditional cockfight event held in the coastal regions of Karnataka.',
  },
  yakshagana: {
    img: yakshagana,
    description: 'Yakshagana is a traditional theater form that combines dance, music, dialogue, and elaborate costumes.',
  },
};

const Traditions = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (key) => {
    setModalData(traditionsData[key]);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="traditions-container">
      <div className="tradition-card" onClick={() => openModal('dhaiva')}>
        <div className="tradition-image">
          <img src={kola} alt="Dhaiva Aaradhane" />
          <div className="image-overlay">
            <span>Dhaiva Aaradhane</span>
          </div>
        </div>
      </div>

      <div className="tradition-card" onClick={() => openModal('kambla')}>
        <div className="tradition-image">
          <img src={kambla} alt="Kambla" />
          <div className="image-overlay">
            <span>Kambla</span>
          </div>
        </div>
      </div>

      <div className="tradition-card" onClick={() => openModal('kori')}>
        <div className="tradition-image">
          <img src={koridakatta} alt="Kori da Katta" />
          <div className="image-overlay">
            <span>Kori da Katta</span>
          </div>
        </div>
      </div>

      <div className="tradition-card" onClick={() => openModal('yakshagana')}>
        <div className="tradition-image">
          <img src={yakshagana} alt="Yakshagana" />
          <div className="image-overlay">
            <span>Yakshagana</span>
          </div>
        </div>
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
    </div>
  );
};

export default Traditions;
