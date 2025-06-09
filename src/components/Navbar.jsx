// import { useEffect } from 'react';
// import { useState, useEffect } from 'react';
// import miFoto from '../assets/mi-foto.jpg'; // Ruta a tu imagen

// function Navbar() {

//     // EFECTOS DE NAVBAR 
//     useEffect(() => {
//         const handleLinkClick = () => {
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             if (navbarCollapse.classList.contains('show')) {
//                 const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
//                 bsCollapse.hide();
//             }
//         };

//         const handleOutsideClick = (event) => {
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             const isOpen = navbarCollapse.classList.contains('show');
//             const isClickInside = navbarCollapse.contains(event.target) || event.target.classList.contains('navbar-toggler');

//             if (isOpen && !isClickInside) {
//                 const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
//                 bsCollapse.hide();
//             }
//         };

//         const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             link.addEventListener('click', handleLinkClick);
//         });

//         document.addEventListener('click', handleOutsideClick);

//         return () => {
//             navLinks.forEach(link => {
//                 link.removeEventListener('click', handleLinkClick);
//             });
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, []);

//     //MODO OSCURO / MODO CLARO 

//     const [darkMode, setDarkMode] = useState(true);

//     // Actualiza el body cuando cambia el tema
//     useEffect(() => {
//         document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
//     }, [darkMode]);

//     const toggleTheme = () => {
//         setDarkMode(!darkMode);
//     };

//     return (
//         <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top py-3`}>
//             <div className="container d-flex align-items-center justify-content-between">
//                 <a className="navbar-brand d-flex align-items-center" href="#">
//                     <img
//                         src={miFoto}
//                         alt="Foto de Neamane"
//                         className="rounded-circle me-2"
//                         style={{ width: '48px', height: '48px', objectFit: 'cover' }}
//                     />
//                     <span className="fs-4 fw-semibold">Neamane Gelaas</span>
//                 </a>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto align-items-center">
//                         <li className="nav-item"><a className="nav-link fs-5" href="#about">About</a></li>
//                         <li className="nav-item"><a className="nav-link fs-5" href="#projects">Projects</a></li>
//                         <li className="nav-item"><a className="nav-link fs-5" href="#contact">Contact</a></li>
//                         <li className="nav-item ms-3">
//                             <div className="form-check form-switch">
//                                 <input
//                                     className="form-check-input"
//                                     type="checkbox"
//                                     id="themeSwitch"
//                                     checked={darkMode}
//                                     onChange={toggleTheme}
//                                 />
//                                 <label className="form-check-label" htmlFor="themeSwitch">
//                                     {/* {darkMode ? 'Dark' : 'Light'} */}
//                                 </label>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     );
// }

// export default Navbar;








import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import miFoto from '../assets/mi-foto.jpg';

function Navbar({ darkMode, toggleTheme }) {
    const { t, i18n } = useTranslation();

    // 🔀 Cierra el menú al hacer clic o fuera de él
    useEffect(() => {
        const handleLinkClick = () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
                bsCollapse.hide();
            }
        };

        const handleOutsideClick = (event) => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const isOpen = navbarCollapse.classList.contains('show');
            const isClickInside = navbarCollapse.contains(event.target) || event.target.classList.contains('navbar-toggler');
            if (isOpen && !isClickInside) {
                const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
                bsCollapse.hide();
            }
        };

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        document.addEventListener('click', handleOutsideClick);

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // 🌐 Cambiar idioma
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top py-3`}>
            <div className="container d-flex align-items-center justify-content-between">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src={miFoto}
                        alt="Foto de Neamane"
                        className="rounded-circle me-2"
                        style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                    />
                    <span className="fs-4 fw-semibold">Neamane Gelaas</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item"><a className="nav-link fs-5" href="#hero">{t('navbar.home')}</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#projects">{t('navbar.projects')}</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#about">{t('navbar.about')}</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#certifications">{t('navbar.certifications')}</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#skills">{t('navbar.skills')}</a></li>

                        {/* 🌙 Switch modo oscuro */}
                        <li className="nav-item ms-3">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="themeSwitch"
                                    checked={darkMode}
                                    onChange={toggleTheme}
                                />
                            </div>
                        </li>

                        {/* 🌐 Botón de idioma */}
                        <li className="nav-item ms-3">
                            <button className="btn btn-outline-secondary btn-sm" onClick={toggleLanguage}>
                                {i18n.language === 'es' ? 'EN' : 'ES'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

























// import { useEffect } from 'react';

// function Navbar() {

//     useEffect(() => {
//         const handleLinkClick = () => {
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             if (navbarCollapse.classList.contains('show')) {
//                 const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
//                     toggle: true,
//                 });
//                 bsCollapse.hide();
//             }
//         };

//         const handleOutsideClick = (event) => {
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             const isOpen = navbarCollapse.classList.contains('show');
//             const isClickInside = navbarCollapse.contains(event.target) || event.target.classList.contains('navbar-toggler');

//             if (isOpen && !isClickInside) {
//                 const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
//                     toggle: true,
//                 });
//                 bsCollapse.hide();
//             }
//         };

//         const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             link.addEventListener('click', handleLinkClick);
//         });

//         document.addEventListener('click', handleOutsideClick);

//         return () => {
//             navLinks.forEach(link => {
//                 link.removeEventListener('click', handleLinkClick);
//             });
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, []);

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//             <div className="container">
//                 <a className="navbar-brand" href="#">Neamane</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     );
// }

// export default Navbar;