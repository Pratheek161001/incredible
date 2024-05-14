import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavScrollExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <Home/>
    </div>
  );
}

export default App;
