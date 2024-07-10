import React, { useState } from 'react';
import './Traditions.css';
import kola from './crousels/crousel assets/WhatsApp Image 2024-06-01 at 11.57.29_e9c80c71.jpg';
import yakshagana from './crousels/crousel assets/WhatsApp Image 2024-06-01 at 11.58.57_5efa3aa6.jpg';
import kambla from './crousels/crousel assets/WhatsApp Image 2024-05-31 at 12.25.49_823b357d.jpg';
import koridakatta from './crousels/crousel assets/kori da katta.avif';

const traditionsData = {
  DhaivaAaradhane: {
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
  const [expandedTradition, setExpandedTradition] = useState(null);

  const toggleExpand = (key) => {
    if (expandedTradition === key) {
      setExpandedTradition(null);
    } else {
      setExpandedTradition(key);
    }
  };

  return (
    <div className="traditions-container">
      {Object.keys(traditionsData).map((key) => (
        <div className="tradition-card" key={key}>
          <div className="tradition-image">
            <img src={traditionsData[key].img} alt={key} />
          </div>
          <div className="tradition-title">
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
          </div>
          <div className={`tradition-description ${expandedTradition === key ? 'expanded' : ''}`}>
            {expandedTradition === key && (
              <p>{traditionsData[key].description}</p>
            )}
          </div>
          <div className="read-more" onClick={() => toggleExpand(key)}>
            {expandedTradition === key ? 'Read Less' : 'Read More'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Traditions;
