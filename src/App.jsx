import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/cursor';
import Loader from './components/loader';


import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Playground from './pages/Playground';
import ForWheels from './pages/ForWheels';
import PlatePal from './pages/PlatePal';
import Twikkie from './pages/Twikkie';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading && <Loader onComplete={() => setLoading(false)} />}
    <CustomCursor />
      <Router>
          <ScrollToTop /> 
        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/case-studies' element={<CaseStudies />} />
              <Route path="/playground" element={<Playground />} />

              <Route path='/case-studies/twikkie' element={<Twikkie />} />
              <Route path='/case-studies/forwheels' element={<ForWheels />} />
              <Route path='/case-studies/platepal' element={<PlatePal />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
