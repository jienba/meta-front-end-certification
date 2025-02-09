import './App.css'
import AboutLittleLemon from "./AboutLittleLemon.jsx";
import Homepage from "./Homepage.jsx";
import {Link, Route, Routes} from "react-router-dom";
import Contact from "./Contact.jsx";

function App() {

  return (
      <>
          <nav>
              <Link to="/" className="nav-item">Homepage</Link>
              <Link to="/about" className="nav-item">About Little Lemon</Link>
              <Link to="/contact" className="nav-item">Contact</Link>
          </nav>

        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<AboutLittleLemon/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </>
  )
}

export default App
