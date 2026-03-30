import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">{t('about.title')}</h2>
        <p className="lead">{t('about.description')}</p>

        <div className="row mt-4">
          <div className="col-md-4 pb-4">
            <div className="card-custom h-100 p-4">
              <div className="card-body">
                <i className="bi bi-lightning-charge-fill fs-2 text-primary mb-3" />
                <h5 className="card-title">{t('about.card1Title')}</h5>
                <p className="card-text">{t('about.card1Text')}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 pb-4">
            <div className="card-custom h-100 p-4">
              <div className="card-body">
                <i className="bi bi-journal-code fs-2 text-success mb-3" />
                <h5 className="card-title">{t('about.card2Title')}</h5>
                <p className="card-text">{t('about.card2Text')}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 pb-4">
            <div className="card-custom h-100 p-4">
              <div className="card-body">
                <i className="bi bi-rocket-takeoff fs-2 text-danger mb-3" />
                <h5 className="card-title">{t('about.card3Title')}</h5>
                <p className="card-text">{t('about.card3Text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
