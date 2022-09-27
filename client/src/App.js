import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Nav from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import UserDash from './pages/UserDash';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/dashboard' element={<UserDash />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<p>Page Not Found</p>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
