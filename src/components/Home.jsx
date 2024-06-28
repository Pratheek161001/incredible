import React from 'react'
import myvedio from '../assets/lv_0_20240616232243.mp4'
import './Home.css';
import randomads from '../assets/Screenshot 2024-06-02 181425.png'
import HomeMostVisited from './crousels/HomeMostVisited';
import HomeCardCrousel from './crousels/HomeCardCrousels';
import ContactInfo from './EndPage';
import Traditions from './Traditions';

const Home = () => {
  return (
    <>
    <div className="video-content">
  <video autoPlay loop muted style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', 
    }}>
    <source src={myvedio} />
  </video>
  <p className='content'>Mangaluru, nestled along the southwestern coast of India, is a city where nature and culture beautifully intertwine. Renowned for its pristine beaches like Panambur and Surathkal, the city offers serene views of the Arabian Sea. Mangaluru's lush greenery, punctuated by swaying coconut palms and vibrant gardens, creates a tranquil escape. The historic St. Aloysius Chapel and the majestic Kadri Manjunath Temple showcase the city's rich architectural heritage. With its delicious coastal cuisine, warm hospitality, and stunning sunsets, Mangaluru captivates the heart of every visitor, making it a true gem of Karnataka.</p>
  <div className="ads">
    <img src={randomads} alt="" /> 
  </div>
  <h1 className='popular'>Popular in Mangaluru</h1>
  <p>Mangaluru is a coastal gem boasting pristine beaches, lush greenery, rich cultural heritage, and vibrant local cuisine, making it a captivating destination in Karnataka.</p>
</div>
<div className="must-visit-carousel">
  <HomeMostVisited />
</div>
<h1 className='popular'>Most Visited in Mangaluru</h1>
<p>Mangaluru is a coastal gem boasting pristine beaches, lush greenery, rich cultural heritage, and vibrant local cuisine, making it a captivating destination in Karnataka.</p>
<HomeCardCrousel />
<div className="ads">
    <img src={randomads} alt="" /> 
  </div>
<Traditions/>
<ContactInfo />

    </>
  )
}

export default Home