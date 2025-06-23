// import { useTranslation } from 'react-i18next';

// function Skills() {
//     const { t } = useTranslation();

//     return (
//         <section id="skills" className="container py-5">
//             <h2 className="mb-4">{t('skills.title')}</h2>

//             {/* Soft Skills */}
//             <div className="mb-4">
//                 <h3>{t('skills.soft.title')}</h3>
//                 <ul>
//                     <li>{t('skills.soft.communication')}</li>
//                     <li>{t('skills.soft.teamwork')}</li>
//                     <li>{t('skills.soft.problemSolving')}</li>
//                     <li>{t('skills.soft.fastLearner')}</li>
//                 </ul>
//             </div>

//             {/* Idiomas */}
//             <div className="mb-4">
//                 <h3>{t('skills.languages.title')}</h3>
//                 <ul>
//                     <li>{t('skills.languages.english')}</li>
//                     <li>{t('skills.languages.spanish')}</li>
//                     <li>{t('skills.languages.arabic')}</li>
//                 </ul>
//             </div>

//             {/* Tecnologías */}
//             <div>
//                 <h3>{t('skills.tech.title')}</h3>
//                 <ul>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                     <li>JavaScript</li>
//                     <li>React</li>
//                     <li>Node.js</li>
//                     <li>MongoDB</li>
//                     <li>MySQL</li>
//                     <li>PHP</li>
//                     <li>Python</li>
//                     <li>WordPress</li>
//                     <li>Java</li>
//                     <li>Firebase</li>
//                     <li>Phyzer</li>
//                     <li>SQL Server</li>
//                     <li>Spring Boot</li>
//                 </ul>
//             </div>
//         </section>
//     );
// }

// export default Skills;

import React from 'react';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
    const { t } = useTranslation();

    const techSkills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB',
        'MySQL', 'PHP', 'Python', 'WordPress', 'Java',
        'Firebase', 'Phyzer', 'SQL Server', 'Spring Boot','Vue.js', 'Visual Studio Code', 'TypeScript'
    ];

    return (
        <section id="skills" className="mt-5">
            <div className="container">
                <h2 className="text-center mb-4">{t('skills.title')}</h2>

                {/* Soft Skills */}
                <h5 className="text-light mb-3">{t('skills.soft.title')}</h5>
                <div className="row g-3 mb-4">
                    <div className="col-6 col-md-3">
                        <div className="custom-card p-2 text-center">{t('skills.soft.communication')}</div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="custom-card p-2 text-center">{t('skills.soft.teamwork')}</div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="custom-card p-2 text-center">{t('skills.soft.problemSolving')}</div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="custom-card p-2 text-center">{t('skills.soft.fastLearner')}</div>
                    </div>
                </div>

                {/* Languages */}
                <h5 className="text-light mb-3">{t('skills.languages.title')}</h5>
                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-4">
                        <div className="rounded p-3 d-flex justify-content-evenly align-items-center">
                            <strong>{t('skills.languages.english')}</strong>
                            <div className="text-warning fs-5">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded p-3 d-flex justify-content-evenly align-items-center">
                            <strong>{t('skills.languages.spanish')}</strong>
                            <div className="text-warning fs-5">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded p-3 d-flex justify-content-evenly align-items-center">
                            <strong>{t('skills.languages.arabic')}</strong>
                            <div className="text-warning fs-5">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Technologies */}
                <h5 className="text-light mb-3">{t('skills.tech.title')}</h5>
                <div className="row g-3">
                    {techSkills.map((tech, index) => (
                        <div key={index} className="col-6 col-md-3 col-lg-2">
                            <div className="custom-card p-2 text-center">{tech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

