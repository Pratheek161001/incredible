import './App.css';
import Home from './components/Home';
import NavScrollExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ReligiousPlaces from './components/ReligiousPlaces';
import HistoricalPlaces from './components/HistoricalPlaces';
import Homestays from './components/HomeStays';
import Adventure from './components/Adventure';
import Surfing from './components/Surfing';
import ScrollToTop from './components/crousels/ScrollToTop';
import IncredibleMangalore from './components/About';


function App() {
  return (
    <div className='App'>
    <Router>
    <NavScrollExample/>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/religious-places" element={<ReligiousPlaces />} />
      <Route path="/historical-places" element={<HistoricalPlaces />} />
      <Route path="/homestays" element={<Homestays />} />
      <Route path="/kayaking" element={<Adventure />} />
      <Route path="/surfing" element={<Surfing />} />
      <Route path="/about" element={<IncredibleMangalore/>} />

      </Routes>
    </Router>
    </div>
  )
}

export default App;
