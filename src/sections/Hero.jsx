import miFoto from '../assets/mi-foto.jpg';
import { useTranslation } from 'react-i18next';

function Hero({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="hero-panel">
              <div className="row align-items-center g-5">
                <div className="col-12 col-lg-7">
                  <div className="hero-copy-wrap text-center text-lg-start">
                    <div className="hero-kicker-row d-inline-flex align-items-center gap-2 flex-wrap justify-content-center justify-content-lg-start">
                      <span className="hero-kicker">{t('hero.kicker')}</span>
                      <a
                        href="https://wa.me/34632936088"
                        className="hero-whatsapp-link"
                        aria-label={t('footer.ctaAria')}
                      >
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="hero-photo-shell hero-photo-mobile">
                      <div className="hero-photo-ring">
                        <img
                          src={miFoto}
                          alt={t('hero.photoAlt')}
                          className="hero-photo"
                        />
                      </div>
                    </div>
                    <div className="hero-intro-label mt-4">{t('hero.greeting')}</div>
                    <h1 className="hero-name mt-2 mb-2">Neamane Gelaas</h1>
                    <h2 className="hero-role mb-3">{t('hero.role')}</h2>
                    <p className="lead hero-copy mb-0">{t('hero.intro')}</p>

                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                      <a
                        href="/porfolio/CV_en_NeamaneGelaas.pdf"
                        download
                        className="btn btn-outline-primary hero-download-btn"
                      >
                        {t('hero.cvEnglish')}
                      </a>
                      <a
                        href="/porfolio/CV_es_NeamaneGelaas.pdf"
                        download
                        className={`btn ${
                          darkMode ? 'btn-outline-light' : 'btn-outline-secondary'
                        } hero-download-btn`}
                      >
                        {t('hero.cvSpanish')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-5">
                  <div className="hero-photo-shell hero-photo-desktop">
                    <div className="hero-photo-ring">
                      <img
                        src={miFoto}
                        alt={t('hero.photoAlt')}
                        className="hero-photo"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-tech-cloud mt-5">
                <i className="devicon-html5-plain colored" title="HTML5" />
                <i className="devicon-css3-plain colored" title="CSS3" />
                <i className="devicon-javascript-plain colored" title="JavaScript" />
                <i className="devicon-react-original colored" title="React" />
                <i className="devicon-nodejs-plain colored" title="Node.js" />
                <i
                  className="devicon-wordpress-plain tech-icon-wordpress"
                  title="WordPress"
                />
                <i className="devicon-firebase-plain colored" title="Firebase" />
                <i className="devicon-git-plain colored" title="Git" />
                <i className="devicon-mysql-plain tech-icon-mysql" title="MySQL" />
                <i className="devicon-python-plain colored" title="Python" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
