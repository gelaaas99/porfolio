import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="py-5 text-center d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h1 className="display-4 fw-bold">{t('hero.title')}</h1>
        <p className="lead">{t('hero.subtitle')}</p>
        <a href="#projects" className="btn btn-primary mt-3">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}

export default Hero;
