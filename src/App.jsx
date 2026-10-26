
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/scrollToTop';
import CustomCursor from './components/cursor';
import Loader from './components/loader';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Lab from './pages/Lab';
import ForWheels from './pages/ForWheels';
import PlatePal from './pages/PlatePal';
import Twikkie from './pages/Twikkie';
import TwikkieDs from './pages/TwikkieDs';
import EduLearn from './pages/EduLearn';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />

      {/* The website stays rendered behind the loader */}
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/lab" element={<Lab />} />

          <Route path="/case-studies/twikkie" element={<Twikkie />} />
          <Route path="/case-studies/twikkieds" element={<TwikkieDs />} />
          <Route path="/case-studies/forwheels" element={<ForWheels />} />
          <Route path="/case-studies/platepal" element={<PlatePal />} />
          <Route path="/case-studies/edulearn" element={<EduLearn />} />
        </Routes>

        <Footer />
      </div>

      {/* Prevent cursor effects from appearing over the intro */}
      {!loading && <CustomCursor />}

      {/* Full-screen loader, mounted once per page load */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}
    </Router>
  );
}

export default App;
