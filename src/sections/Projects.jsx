import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.project1.title'),
            description: t('projects.project1.description'),
            link: 'https://github.com/neamane/project1',
        },
        {
            title: t('projects.project2.title'),
            description: t('projects.project2.description'),
            link: 'https://github.com/neamane/project2',
        },
        {
            title: t('projects.project3.title'),
            description: t('projects.project3.description'),
            link: 'https://github.com/neamane/project3',
        },
    ];

    return (
        <section id="projects" className="py-5 ">
            <div className="container">
                <h2 className="text-center mb-5">{t('projects.title')}</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text flex-grow-1">{project.description}</p>
                                    <a href={project.link} className="btn btn-outline-primary mt-auto" target="_blank" rel="noopener noreferrer">
                                        {t('projects.view')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
