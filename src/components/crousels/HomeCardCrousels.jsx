import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PlaceCard from '../PlaceCard';
import Button from 'react-bootstrap/Button';
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
  { image: panambur, title: 'Panambur Beach', text: 'Explore the beauty of Panambur Beach with golden sands and vibrant sunsets.', link: '#' },
  { image: sasihithlu, title: 'Sasihithlu Beach', text: 'Unveil the hidden gem of Sasihithlu Beach with crystal-clear waters and lush greenery.', link: '#' },
  { image: tannirbhavi, title: 'Tannirbhavi Beach', text: 'Discover tranquility at Tannirbhavi Beach, perfect for a peaceful retreat.', link: '#' },
  { image: nitkbeach, title: 'NITK Beach', text: 'Enjoy the serene ambiance of NITK Beach, a must-visit for relaxation.', link: '#' },
];

const religiousPlaces = [
  { image: polali, title: 'Polali', text: 'Experience divine serenity at Polali Temple, Mangalore: culture, spirituality, tranquility.', link: '#' },
  { image: bappanadu, title: 'Bappanadu', text: 'Discover the divine beauty of Bappanadu Temple: a sanctuary of spirituality and rich history.', link: '#' },
  { image: kateel, title: 'Kateel', text: 'Discover tranquility at Kateel Temple: spiritual bliss amidst nature.', link: '#' },
  { image: mangaladevi, title: 'Mangaladevi', text: 'Experience divine grace at Mangaladevi Temple: heritage, spirituality, peace.', link: '#' },
];

const historicalPlaces = [
  { image: aloysius, title: 'St Aloysius Chapel', text: 'Discover the awe-inspiring St. Aloysius Chapel: renowned for its stunning frescoes and profound spiritual ambiance.', link: '#' },
  { image: museum, title: 'Bejai Museum', text: 'Discover Bejai Museum: an enthralling collection of historical artifacts and cultural exhibits.', link: '#' },
  { image: sulthan, title: 'Sulthan Battery', text: 'Explore Sulthan Battery: a historical fort offering a glimpse into the rich cultural heritage of Karnataka.', link: '#' },
];

const homeStays = [
  { image: room1, title: 'Blue Lagoon Homestays', text: '3QPJ+RQM, Kolachikambla Rd, Karnad, Mulki, Hejamadi, Karnataka\nRatings :  4.9 (20)', link: 'https://www.google.com/maps/place/BLUE+LAGOON+HOMESTAY/@13.0870384,74.7824431,17z/data=!4m9!3m8!1s0x3bbcad0066172fdf:0x815380ba8639bc33!5m2!4m1!1i2!8m2!3d13.0870852!4d74.7819277!16s%2Fg%2F11vrk3q6y8?entry=ttu' },
];

function HomeCardCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <h3 style={{ padding: '40px', color: 'slategray' }}>Major Beaches</h3>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='cards d-flex justify-content-center'>
            {beaches.map((beach, index) => (
              <PlaceCard key={index} image={beach.image} title={beach.title} text={beach.text} link={beach.link} />
            ))}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" style={{ margin: '50px' }}>View all</Button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <h3 style={{ padding: '40px', color: 'slategray' }}>Major Religious Places</h3>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='cards d-flex justify-content-center'>
            {religiousPlaces.map((place, index) => (
              <PlaceCard key={index} image={place.image} title={place.title} text={place.text} link={place.link} />
            ))}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" style={{ margin: '50px' }}>View all</Button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <h3 style={{ padding: '40px', color: 'slategray' }}>Major Historical Places</h3>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='cards d-flex justify-content-center'>
            {historicalPlaces.map((place, index) => (
              <PlaceCard key={index} image={place.image} title={place.title} text={place.text} link={place.link} />
            ))}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" style={{ margin: '50px' }}>View all</Button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <h3 style={{ padding: '40px', color: 'slategray' }}>Home Stays</h3>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='cards d-flex justify-content-center'>
            {homeStays.map((stay, index) => (
              <PlaceCard key={index} image={stay.image} title={stay.title} text={stay.text} link={stay.link} />
            ))}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" style={{ margin: '50px' }}>View all</Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCardCarousel;
