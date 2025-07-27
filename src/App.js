import "./App.css";
import Home from "./components/pages/Home";
import Jobs from "./components/pages/Jobs";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/jobs" element={<Jobs />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        </div>
        
        <Footer />
      </>
    </Router>
  );
}

export default App;
