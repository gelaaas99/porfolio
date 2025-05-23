import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="container py-5">
            <h2 className="mb-4">{t('skills.title')}</h2>

            {/* Soft Skills */}
            <div className="mb-4">
                <h3>{t('skills.soft.title')}</h3>
                <ul>
                    <li>{t('skills.soft.communication')}</li>
                    <li>{t('skills.soft.teamwork')}</li>
                    <li>{t('skills.soft.problemSolving')}</li>
                    <li>{t('skills.soft.fastLearner')}</li>
                </ul>
            </div>

            {/* Idiomas */}
            <div className="mb-4">
                <h3>{t('skills.languages.title')}</h3>
                <ul>
                    <li>{t('skills.languages.english')}</li>
                    <li>{t('skills.languages.spanish')}</li>
                    <li>{t('skills.languages.arabic')}</li>
                </ul>
            </div>

            {/* Tecnologías */}
            <div>
                <h3>{t('skills.tech.title')}</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>WordPress</li>
                    <li>Java</li>
                    <li>Firebase</li>
                    <li>Phyzer</li>
                    <li>SQL Server</li>
                    <li>Spring Boot</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;
