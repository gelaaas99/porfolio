// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './pages/Home.jsx';
// import Navbar from './components/Navbar.jsx';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Navbar />
//       <Home />
//       {/* <Hero />
//       <About />
//       <Projects />
//       <Contact /> */}
//     </div>
//   )
// }

// export default App;




import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Asegúrate de que i18n esté inicializado

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

  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="py-5">
          <Hero />
        </section>

        <section id="projects" className="py-5">
          <Projects />
        </section>

        <section id="about" className="py-5">
          <About />
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