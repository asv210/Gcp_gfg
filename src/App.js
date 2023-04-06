import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Store from './components/store';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/store' element={<Store></Store>} />
          <Route exact path='/weather' element={<Weather></Weather>} />
          <Route exact path='/contact' element={<Contact></Contact>} />
          <Route exact path='/about' element={<About></About>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
