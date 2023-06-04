import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Landing from './pages/LandingPage';
import Register from './pages/RegisterPage';
import LoginUser from './pages/LoginUserPage';
import LoginAdmin from './pages/LoginAdminPage';
import Navbar from './component/Nvgbar';
import Homepage from './pages/HomepageUser';
import Footer from './component/FooterPage';

function App() {

  return (
    <div>
      <Navbar />
    <div>
     <Router>
     <Routes>
      <Route path="/homepage" element={<Homepage /> } />
       <Route path="/" element={<Landing /> } />
       <Route path="/user/login" element={<LoginUser />} />
       <Route path="/register" element={<Register />} />
       <Route path="/admin/login" element={<LoginAdmin />} />

     </Routes>
   </Router>
</div>
    <div>
      <Footer />
    </div>
   </div>
  )
}

export default App
