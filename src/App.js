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


function App() {
  return (
    <div className='App'>
    <Router>
    <NavScrollExample/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/religious-places" element={<ReligiousPlaces />} />
      <Route path="/historical-places" element={<HistoricalPlaces />} />
      <Route path="/homestays" element={<Homestays />} />
      <Route path="/kayaking" element={<Adventure />} />
      <Route path="/surfing" element={<Surfing />} />



      </Routes>
    </Router>
    </div>
  )
}

export default App;
