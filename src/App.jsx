import { useEffect, useRef, useState } from 'react';
import './i18n';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [darkMode]);

  useEffect(() => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    const vantaConfig = darkMode
      ? {
          highlightColor: 0x2a596e,
          midtoneColor: 0x373846,
          lowlightColor: 0x576ba4,
          baseColor: 0x0a0a18,
          zoom: 0.9,
          speed: 1.5,
        }
      : {
          highlightColor: 0xc3d1f5,
          midtoneColor: 0x8fb3fa,
          lowlightColor: 0x4ca0fa,
          baseColor: 0xffffff,
          zoom: 0.9,
          speed: 1.5,
        };

    const initVanta = () => {
      if (!vantaEffect.current && window.VANTA && vantaRef.current) {
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          ...vantaConfig,
        });
      }
    };

    initVanta();

    const retryId = window.setInterval(() => {
      if (window.VANTA && !vantaEffect.current) {
        initVanta();
      }
      if (vantaEffect.current) {
        window.clearInterval(retryId);
      }
    }, 250);

    return () => {
      window.clearInterval(retryId);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <div ref={vantaRef} className="vanta-background" />
      <div className="app-shell">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero darkMode={darkMode} />
          <Projects />
          <About />
          <Certifications />
          <Skills />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
