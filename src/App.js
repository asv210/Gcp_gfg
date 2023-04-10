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
import Adminlogin from './components/Adminlogin';
import './index.css';
import Adminpage from './components/Adminpage';
import ShopKeeperDetails from './components/ShopKeeperDetails';
import ShopKeeperLogin from './components/ShopKeeperLogin';
import AddProduct from './components/AddProduct';
import Shopkeeperpage from './components/Shopkeeperpage';

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
          <Route exact path='/Adminlogin' element={<Adminlogin/>}/>
          <Route exact path="/Adminpage" element={<Adminpage />} />
          <Route exact path='/ShopKeeperDetails' element={<ShopKeeperDetails/>}/>
          <Route exact path='/ShopKeeperLogin' element={<ShopKeeperLogin/>}/>
          <Route exact path='/AddProduct' element={<AddProduct/>}/>
          <Route exact path='/Shopkeeperpage' element={<Shopkeeperpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
