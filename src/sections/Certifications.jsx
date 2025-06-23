import { useTranslation } from 'react-i18next';

function Certifications() {
    const { t } = useTranslation();
    const certifications = t('certifications.items', { returnObjects: true });

    return (
        <section id="certifications" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{t('certifications.title')}</h2>
                <div className="row justify-content-center">
                    {certifications.map((cert, index) => (
                        <div key={index} className="col-12 col-md-6 mb-4">
                            <div className="card-custom p-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">{cert.name}</h5>
                                    <p className="card-text mb-1">
                                        <strong>{cert.date}</strong> – {cert.provider}
                                    </p>
                                    {cert.hours && (
                                        <p className="card-text">
                                            Duration: {cert.hours}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;


