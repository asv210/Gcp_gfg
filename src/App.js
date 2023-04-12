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
import StoreLogin from './components/StoreLogin/StoreLogin';
import ShopOnline from './components/ShopOnline/ShopOnline';
import Weather from './components/weather';
import CartItems from './components/cartItems';
import StoreSignUp from './components/StoreSignUp/StoreSignUp';
import ShopsNearMe from './components/ShopsNearMe/ShopsNearMe';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/storeLogin' element={<StoreLogin></StoreLogin>} />
          <Route exact path='/shopOnline' element={<ShopOnline></ShopOnline>} />
          <Route exact path='/weather' element={<Weather></Weather>} />
          <Route exact path='/contact' element={<Contact></Contact>} />
          <Route exact path='/about' element={<About></About>} />
          <Route exact path='/cartItems' element={<CartItems></CartItems>}/>
          <Route exact path='/storeSignUp' element={<StoreSignUp></StoreSignUp>}/>
          <Route exact path='/nearShops' element={<ShopsNearMe></ShopsNearMe>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
