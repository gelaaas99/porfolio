import { useTranslation } from 'react-i18next';

function Footer({ darkMode }) {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const textClass = darkMode ? 'text-light' : 'text-dark';
  const mutedClass = darkMode ? 'text-light opacity-75' : 'text-dark opacity-75';
  const linkClass = darkMode ? 'link-light' : 'link-dark';
  const btnClass = darkMode ? 'btn-outline-light' : 'btn-outline-dark';

  const dividerStyle = {
    height: '1px',
    width: '100%',
    opacity: 0.85,
    background: darkMode
      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0,0,0,.20), transparent)',
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`mt-5 transparent-bg footer-shell ${textClass}`}>
      <div style={dividerStyle} />

      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="d-flex flex-column gap-2 footer-block">
              <h5 className="mb-0 fw-bold footer-brand">{t('footer.brand')}</h5>
              <div className={`footer-role ${mutedClass}`}>{t('footer.role')}</div>

              <p className={`mb-2 footer-description ${mutedClass}`}>
                {t('footer.description')}
              </p>

              <div className="d-flex flex-wrap gap-2">
                <a
                  href="https://wa.me/34632936088"
                  className={`btn btn-sm footer-action ${btnClass}`}
                  aria-label={t('footer.ctaAria')}
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> {t('footer.cta')}
                </a>

                <button
                  type="button"
                  onClick={scrollTop}
                  className={`btn btn-sm footer-action ${btnClass}`}
                  aria-label={t('footer.backToTopAria')}
                >
                  <span aria-hidden>↑</span> {t('footer.backToTop')}
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <h6 className="fw-bold mb-3 footer-heading">{t('footer.navTitle')}</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <a href="#projects" className={`${linkClass} text-decoration-none footer-link`}>
                  {t('footer.nav.projects')}
                </a>
              </li>
              <li>
                <a href="#skills" className={`${linkClass} text-decoration-none footer-link`}>
                  {t('footer.nav.skills')}
                </a>
              </li>
              <li>
                <a href="#about" className={`${linkClass} text-decoration-none footer-link`}>
                  {t('footer.nav.about')}
                </a>
              </li>
              <li>
                <a href="#hero" className={`${linkClass} text-decoration-none footer-link`}>
                  {t('footer.nav.top')}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3 footer-heading">{t('footer.contactTitle')}</h6>

            <div className="d-flex flex-column gap-2 footer-block">
              <a
                href="mailto:nehela08@gmail.com"
                className={`${linkClass} text-decoration-none d-inline-flex align-items-center gap-2 footer-link`}
              >
                <i className="fa-regular fa-envelope footer-icon" aria-hidden="true" />
                <span className="text-break">nehela08@gmail.com</span>
              </a>

              <a
                href="tel:+34632936088"
                className={`${linkClass} text-decoration-none d-inline-flex align-items-center gap-2 footer-link`}
              >
                <i className="fa-solid fa-phone footer-icon" aria-hidden="true" />
                <span>+34 632 93 60 88</span>
              </a>

              <div className={`d-inline-flex align-items-center gap-2 ${mutedClass}`}>
                <i className="fa-solid fa-location-dot footer-icon" aria-hidden="true" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3 footer-heading">{t('footer.socialTitle')}</h6>

            <div className="d-flex flex-wrap gap-2 footer-socials">
              <a
                href="https://www.linkedin.com/in/neamane"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} text-decoration-none d-inline-flex align-items-center gap-2 footer-link footer-chip`}
                aria-label={t('footer.linkedinAria')}
              >
                <i className="fa-brands fa-linkedin-in footer-icon" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/gelaaas99"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} text-decoration-none d-inline-flex align-items-center gap-2 footer-link footer-chip`}
                aria-label={t('footer.githubAria')}
              >
                <i className="fa-brands fa-github footer-icon" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <hr
          className={`my-4 ${
            darkMode ? 'border-light opacity-25' : 'border-dark opacity-25'
          }`}
        />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <small className={mutedClass}>
            © {year} {t('footer.brand')} - {t('footer.rights')}
          </small>

          <small className={mutedClass}>{t('footer.madeWith')}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
