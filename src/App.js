import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Coin from './components/Coin';
import Exchanges from './components/Exchanges';
import CoinsDetails from './components/CoinDetails';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coins' element={<Coin />}/>
        <Route path='/coin/:id' element={<CoinsDetails />}/>
        <Route path='/exchanges' element={<Exchanges />}/>        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
