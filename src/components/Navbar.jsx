import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import miFoto from '../assets/mi-foto.jpg';
import LanguageSwitch from './LanguageSwitch';

function Navbar({ darkMode, toggleTheme }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbarCollapse = collapseRef.current;
      const toggler = togglerRef.current;

      if (!isMenuOpen || !navbarCollapse || !toggler) return;

      const clickedToggler = toggler.contains(event.target);
      const clickedInsideMenu = navbarCollapse.contains(event.target);

      if (!clickedToggler && !clickedInsideMenu) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? 'navbar-dark' : 'navbar-light'
      } transparent-bg fixed-top py-3`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#hero" onClick={handleCloseMenu}>
          <img
            src={miFoto}
            alt="Foto de Neamane"
            className="rounded-circle me-2 brand-avatar"
          />
          <span className="fs-4 fw-semibold">Neamane Gelaas</span>
        </a>

        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          ref={collapseRef}
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link fs-6 fw-semibold" href="#hero" onClick={handleCloseMenu}>
                {t('navbar.home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-semibold" href="#projects" onClick={handleCloseMenu}>
                {t('navbar.projects')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-semibold" href="#about" onClick={handleCloseMenu}>
                {t('navbar.about')}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-6 fw-semibold"
                href="#certifications"
                onClick={handleCloseMenu}
              >
                {t('navbar.certifications')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-semibold" href="#skills" onClick={handleCloseMenu}>
                {t('navbar.skills')}
              </a>
            </li>

            <li className="nav-item navbar-control-item navbar-theme-item ms-lg-3">
              <div className="form-check form-switch navbar-theme-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="themeSwitch"
                  checked={darkMode}
                  onChange={toggleTheme}
                  aria-label={darkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
                />
              </div>
            </li>

            <li className="nav-item navbar-control-item navbar-language-item ms-lg-2">
              <LanguageSwitch darkMode={darkMode} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
