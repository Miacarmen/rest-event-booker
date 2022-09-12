import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Nav from './components/Navigation/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* <div className='wrapper bg-silver'> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='*' element={<p>Page Not Found</p>} />
          </Routes>
        {/* </div> */}
        
      </Router>
    </>
  );
}

export default App;
