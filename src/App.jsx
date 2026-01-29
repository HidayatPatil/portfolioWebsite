import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import DitherBackground from './components/DitherBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import MontroDetail from './pages/projects/MontroDetail';
import PrologDetail from './pages/projects/PrologDetail';
import PolarQuestDetail from './pages/projects/PolarQuestDetail';
import HeartyMealsDetail from './pages/projects/HeartyMealsDetail';
import UstraaDetail from './pages/projects/UstraaDetail';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Start nav animation shortly after loading completes
    setTimeout(() => {
      setShowNav(true);
    }, 200);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="site-body">
        <div className="hero-section">
          <DitherBackground />
          <Navigation className={showNav ? 'slide-in' : ''} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/montro" element={<MontroDetail />} />
            <Route path="/projects/prolog" element={<PrologDetail />} />
            <Route path="/projects/polar-quest" element={<PolarQuestDetail />} />
            <Route path="/projects/hearty-meals" element={<HeartyMealsDetail />} />
            <Route path="/projects/ustraa" element={<UstraaDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
