import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './HomeMostVisited.css';
import { Container } from 'react-bootstrap';
import batapady from './crousel assets/batapady.jpg';
import kudroli from './crousel assets/kudroli.jpg';
import manasa from './crousel assets/manasa.jpg';
import zoo from './crousel assets/zoo.jpg';
import kadri from './crousel assets/kadri park.jpg';
import port from './crousel assets/Mangalore port.jpg';
import sultan from './crousel assets/sulthan batteri.jpg';

function HomeMostVisited() {
  return (
    <Container>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={batapady} alt="Batapady" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Batapady</Card.Title>
                <Card.Text className="card-text">
                  Explore Talapady's mangroves in Mangalore, Karnataka, a serene sanctuary where nature thrives. These lush forests, rich in diverse flora and fauna, offer a unique, untouched ecosystem. Ideal for nature enthusiasts, Talapady's mangroves are perfect for bird watching, kayaking, and peaceful boat rides. Experience the calming embrace of nature and the rich biodiversity, a true escape from everyday life.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={kudroli} alt="Kudroli" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Kudroli</Card.Title>
                <Card.Text className="card-text">
                  Immerse yourself in Kudroli Gokarnath Temple in Mangalore, Karnataka, dedicated to Lord Gokarnanatheshwara. With stunning murals, intricate sculptures, and a blend of traditional and contemporary architecture, it hosts vibrant festivals, especially Dasara. Surrounded by landscaped gardens, it offers a tranquil retreat for prayer and reflection, showcasing Mangalore's spiritual and cultural richness.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={manasa} alt="Manasa Water park" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Manasa Water park</Card.Title>
                <Card.Text className="card-text">
                  Discover the thrill at Manasa Amusement and Water Park in Vamanjoor, Mangalore, Karnataka. Enjoy exhilarating rides, refreshing water slides, and serene picnic spots amidst lush greenery. Perfect for families and adventure seekers, Manasa offers unforgettable fun and relaxation in a vibrant setting.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={zoo} alt="Pilikula Nisargadhama" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Pilikula Nisargadhama</Card.Title>
                <Card.Text className="card-text">
                  Explore the natural wonders of Pilikula Nisargadhama in Vamanjoor, Mangalore, Karnataka. With lush landscapes, a serene lake, botanical garden, zoo, and science center, it's perfect for families and nature lovers. Enjoy boat rides, biodiversity, and heritage at the village. Experience the tranquility of Pilikula Nisargadhama, a serene escape into nature's embrace.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={port} alt="Mangalore port" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Mangalore Port</Card.Title>
                <Card.Text className="card-text">
                  Explore the vibrant hub of coastal trade at the New Mangalore Port Authority (NMPA) in Mangalore, Karnataka. As India’s premier maritime gateway, NMPA showcases modern engineering and efficient logistics. Located strategically, it handles a wide range of cargo, facilitating seamless international trade. Visitors can marvel at the impressive infrastructure and witness the constant flow of ships and goods. Experience the pulse of commerce and industry at NMPA, where land and sea converge to power economic growth.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={sultan} alt="Sulthan Battery" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Sulthan Battery</Card.Title>
                <Card.Text className="card-text">
                  Discover the serene Jain Temple of Sultan Battery in Mangalore, Karnataka. Nestled amidst lush greenery, this sacred site boasts timeless spirituality and architectural brilliance. Marvel at its intricate carvings and historical significance, promising a memorable journey into Karnataka's rich cultural heritage.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.Img src={kadri} alt="Kadri" />
            <Card.ImgOverlay className="overlay-bg">
              <div className="text-container">
                <Card.Title className="title-text">Kadri Park</Card.Title>
                <Card.Text className="card-text">
                  Discover the tranquil Kadri Park in Mangalore, Karnataka, a lush haven for relaxation and recreation. With landscaped gardens, vibrant flowers, and a serene lake, it's ideal for families, nature enthusiasts, and fitness lovers. Whether strolling along pathways, picnicking under trees, or letting children play, Kadri Park offers a refreshing escape from city life. Experience nature's harmony at this serene gem in Mangalore.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
}

export default HomeMostVisited;
