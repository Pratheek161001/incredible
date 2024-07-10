import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PlaceCard from '../PlaceCard';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop' 
import './Crousel.css';

import polali from './crousel assets/polali.jpg';
import kateel from './crousel assets/kateel.jpg';
import mangaladevi from './crousel assets/mangaladevi.jpg';
import sulthan from './crousel assets/sulthan batteri.jpg';
import aloysius from './crousel assets/Aloysius chapel.jpg';
import museum from './crousel assets/bejai church.jpg';
import panambur from './crousel assets/panambur beach.jpg';
import nitkbeach from './crousel assets/NITK beach.jpg';
import tannirbhavi from './crousel assets/tannirbhavi beach.jpg';
import room1 from './crousel assets/Room - Google Maps_files/726e6211_z.jpg';
import sasihithlu from './crousel assets/sasihithlu beach.jpg';
import bappanadu from './crousel assets/bappanadu.jpg';

const beaches = [
  { image: panambur, title: 'Panambur Beach', text: 'Explore the beauty of Panambur Beach with golden sands and vibrant sunsets.', link: 'https://maps.app.goo.gl/4a64C1yhWCV3phpP6?g_st=ac' },
  { image: sasihithlu, title: 'Sasihithlu Beach', text: 'Unveil the hidden gem of Sasihithlu Beach with crystal-clear waters and lush greenery.', link: 'https://maps.app.goo.gl/zVrzMG95xjpcRb388?g_st=ac' },
  { image: tannirbhavi, title: 'Tannirbhavi Beach', text: 'Discover tranquility at Tannirbhavi Beach, perfect for a peaceful retreat.', link: 'https://maps.app.goo.gl/hXYcyYgMhDnsbWnz6?g_st=ac' },
  { image: nitkbeach, title: 'NITK Beach', text: 'Enjoy the serene ambiance of NITK Beach, a must-visit for relaxation.', link: 'https://maps.app.goo.gl/AU9iuGodKQaz75S36?g_st=ac' },
];

const religiousPlaces = [
  { image: polali, title: 'Polali', text: 'Experience divine serenity at Polali Temple, Mangalore: culture, spirituality, tranquility.', link: 'https://maps.app.goo.gl/h1ZLLELyaDqzdxNz9?g_st=ac' },
  { image: bappanadu, title: 'Bappanadu', text: 'Discover the divine beauty of Bappanadu Temple: a sanctuary of spirituality and rich history.', link: 'https://maps.app.goo.gl/A6qr3YSAHJM45YA69?g_st=ac' },
  { image: kateel, title: 'Kateel', text: 'Discover tranquility at Kateel Temple: spiritual bliss amidst nature.', link: 'https://maps.app.goo.gl/4CCb7hVdabJJcXUk9?g_st=ac' },
  { image: mangaladevi, title: 'Mangaladevi', text: 'Experience divine grace at Mangaladevi Temple: heritage, spirituality, peace.', link: 'https://maps.app.goo.gl/K7nWkummm41PHnmQ7?g_st=ac' },
];

const historicalPlaces = [
  { image: aloysius, title: 'St Aloysius Chapel', text: 'Discover the awe-inspiring St. Aloysius Chapel: renowned for its stunning frescoes and profound spiritual ambiance.', link: 'https://maps.app.goo.gl/Mpj68XDepQXxJj3y7?g_st=ac' },
  { image: museum, title: 'Bejai Museum', text: 'Discover Bejai Museum: an enthralling collection of historical artifacts and cultural exhibits.', link: '//maps.app.goo.gl/fb3hcXuanYCv6rj29?g_st=ac' },
  { image: sulthan, title: 'Sulthan Battery', text: 'Explore Sulthan Battery: a historical fort offering a glimpse into the rich cultural heritage of Karnataka.', link: 'https://maps.app.goo.gl/3NaKcee6a4GSjtzk9?g_st=ac' },
];

const homeStays = [
  { image: room1, title: 'Blue Lagoon Homestays', text: 'Experience the tranquil beauty of Blue Lagoon Home Stays with serene seaside views and soothing ocean waves. Enjoy top-notch hospitality, modern amenities, and cozy accommodations. Explore nearby attractions, engage in water sports, or relax on our private beach', link: 'https://www.google.com/maps/place/BLUE+LAGOON+HOMESTAY/@13.0870384,74.7824431,17z/data=!4m9!3m8!1s0x3bbcad0066172fdf:0x815380ba8639bc33!5m2!4m1!1i2!8m2!3d13.0870852!4d74.7819277!16s%2Fg%2F11vrk3q6y8?entry=ttu' },
];

function HomeCardCarousel() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const renderCards = (items) => (
    <div className='d-flex justify-content-center cards'>
      {items.map((item, index) => (
        <div key={index} className='place-card'>
          <PlaceCard image={item.image} title={item.title} text={item.text} link={item.link} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <ScrollToTop />
      <Carousel data-bs-theme="dark" className="w-100" style={{padding:'75px'}}>
        <Carousel.Item>
          <div className='text-center'>
            <h3 className='py-3 text-slategray'>Major Beaches</h3>
          </div>
          {renderCards(beaches)}
          <div className='text-center'>
            <Button variant="primary" className='my-4' onClick={() => handleNavigate('/Surfing')}>View all</Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='text-center'>
            <h3 className='py-3 text-slategray'>Major Religious Places</h3>
          </div>
          {renderCards(religiousPlaces)}
          <div className='text-center'>
            <Button variant="primary" className='my-4' onClick={() => handleNavigate('/religious-places')}>View all</Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='text-center'>
            <h3 className='py-3 text-slategray'>Major Historical Places</h3>
          </div>
          {renderCards(historicalPlaces)}
          <div className='text-center'>
            <Button variant="primary" className='my-4' onClick={() => handleNavigate('/historical-places')}>View all</Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='text-center'>
            <h3 className='py-3 text-slategray'>Home Stays</h3>
          </div>
          {renderCards(homeStays)}
          <div className='text-center'>
            <Button variant="primary" className='my-4' onClick={() => handleNavigate('/homestays')}>View all</Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCardCarousel;
