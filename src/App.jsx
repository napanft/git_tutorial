import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Sns from './components/Sns';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
      <div className="App">
          {/* <div className='gradient'></div> */}
        <AnimatePresence>
          <Header />
          <Routes location={location} key={location.pathname}>    
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/sns' element={<Sns />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
