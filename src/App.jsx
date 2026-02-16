import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import ForWheels from './pages/ForWheels';
import PlatePal from './pages/PlatePal';
import Twikkie from './pages/Twikkie';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/case-studies' element={<CaseStudies />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/contact" element={<Contact />} />

            <Route path='/case-studies/twikkie' element={<Twikkie />} />
            <Route path='/case-studies/forwheels' element={<ForWheels />} />
            <Route path='/case-studies/platepal' element={<PlatePal />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
