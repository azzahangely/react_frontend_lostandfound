import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Landing from './pages/LandingPage';
import Register from './pages/RegisterPage';
import LoginUser from './pages/LoginUserPage';
import LoginAdmin from './pages/LoginAdminPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing /> } />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<LoginAdmin />} />

      </Routes>
    </Router>

  )
}

export default App
