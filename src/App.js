import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Common/Navbar"
import Footer from "../src/Common/Footer"
import Contact from "../src/Components/Contact"
import About from "../src/Components/About"
import Services from "../src/Components/Services"
import HomePage from './Components/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
    </div>
  );
}

export default App;
