import { useTranslation } from 'react-i18next';

function Footer({ darkMode }) {
    const { t } = useTranslation();

    return (
        <footer className={`py-4 mt-5 transparent-bg ${darkMode ? 'text-light' : 'text-dark'}`}>
            <div className="container">
                <div className="row text-center text-md-start align-items-center">
                    {/* Contacto */}
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">{t('footer.contactTitle')}</h5>
                        <p className="mb-1">📧 nehela08@gmail.com</p>
                        <p className="mb-1">📞 +34 632 93 60 88</p>
                    </div>

                    {/* Enlaces */}
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">{t('footer.socialTitle')}</h5>
                        <a
                            href="https://www.linkedin.com/in/neamane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block ${darkMode ? 'text-light' : 'text-dark'}"
                        >
                            🔗 LinkedIn
                        </a>
                        <a
                            // href="#"
                            // className="text-secondary d-block"
                            // onClick={(e) => e.preventDefault()}
                            href="https://github.com/gelaaas99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block ${darkMode ? 'text-light' : 'text-dark'}"
                        >
                            🐙 GitHub
                        </a>
                    </div>

                    {/* Derechos */}
                    <div className="col-12 col-md-4">
                        <p className="mb-0 text-md-end text-nowrap">{t('footer.rights')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
