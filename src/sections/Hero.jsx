// este es el de que funciona desde un principio 

import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="py-5 text-center d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h1 className="display-4 fw-bold">{t('hero.role')}</h1>
                <p className="lead">{t('hero.intro')}</p>
                {/* <a href="#projects" className="btn btn-primary mt-3">
                    {t('hero.cta')}
                </a> */}
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <a
                        href="/porfolio/CV_FullStack_Neamane.pdf"
                        download
                        className="btn btn-outline-primary"
                    >
                        📄 {t('hero.cvEnglish')}
                    </a>
                    {/* 🟣CUANDO TENGA EL CV EN ESPAÑOL LO TENGO QUE HABILITAR🟣 */}
                    {/* <a
                        href="/cv-neamane-es.pdf"
                        download
                        className="btn btn-outline-secondary"
                    >
                        📄 {t('hero.cvSpanish')}
                    </a> */}
                </div>
                <div className="container mt-5">
                    <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
                        <i className="devicon-html5-plain colored fs-1" title="HTML5"></i>
                        <i className="devicon-css3-plain colored fs-1" title="CSS3"></i>
                        <i className="devicon-javascript-plain colored fs-1" title="JavaScript"></i>
                        <i className="devicon-react-original colored fs-1" title="React"></i>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-4">
                        <i className="devicon-php-plain colored fs-1" title="Node.js"></i>
                        <i className="devicon-python-plain colored fs-1" title="Node.js"></i>
                        <i className="devicon-nodejs-plain colored fs-1" title="Node.js"></i>
                        <i className="devicon-firebase-plain colored fs-1" title="Firebase"></i>
                        <i className="devicon-git-plain colored fs-1" title="Git"></i>
                        <i className="devicon-mysql-plain colored fs-1" title="MySQL"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;