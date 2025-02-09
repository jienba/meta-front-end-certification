import './App.css'
import {Home} from "./components/Home.jsx";
import {AboutMe} from "./components/AboutMe.jsx";
import {Routes, Route, Link} from "react-router-dom";

function App() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about-me">About me</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </>
    )
}

export default App
