import { useTranslation } from 'react-i18next';

function Certifications() {
    const { t } = useTranslation();

    const certifications = t('certifications.items', { returnObjects: true });

    return (
        <section id="certifications" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{t('certifications.title')}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <ul className="ps-0">
                            {certifications.map((cert, index) => (
                                <li key={index} className="mb-2">
                                    <strong>{cert.date}:</strong> {cert.name} - <em>{cert.provider}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Certifications;
