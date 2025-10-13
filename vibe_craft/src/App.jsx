import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
