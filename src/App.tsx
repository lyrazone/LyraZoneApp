import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Careers";
import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Git from "./pages/Git";
import LatestNews from "./pages/LatestNews";
import SignIn from "./pages/LoginModal";
import LoginModal from "./pages/LoginModal";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/git" element={<Git />} />
        <Route path="/latestnews" element={<LatestNews />} />
        <Route path="/loginmodal" element={<LoginModal />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
