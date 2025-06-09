import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

// Componentes
import Navbar from './components/Navbar';

// Secciones
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Certifications from './sections/Certifications.jsx';
import Skills from './sections/Skills';

function App() {
  const { t } = useTranslation();

  // 🌙 Estado global para dark mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
      {/* ✅ Ahora pasas el estado y el setter a Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <section id="hero" className="py-5">
          <Hero />
        </section>

        <section id="projects" className="py-5">
          <Projects />
        </section>

        <section id="about" className="py-5">
          <About darkMode={darkMode} />
        </section>

        <section id="certifications" className="py-5">
          <Certifications />
        </section>

        <section id="skills" className="py-5">
          <Skills />
        </section>
      </main>
    </>
  );
}

export default App;















{/* <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */}