import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{t('about.title')}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="lead text-center">
                            {t('about.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
