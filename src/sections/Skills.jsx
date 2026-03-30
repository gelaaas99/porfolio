import { useTranslation } from 'react-i18next';

const techSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'MySQL',
  'PHP',
  'Python',
  'WordPress',
  'Java',
  'Firebase',
  'Phyzer',
  'SQL Server',
  'Spring Boot',
  'Vue.js',
  'Visual Studio Code',
  'TypeScript',
];

function SkillPill({ children }) {
  return <div className="card-custom skill-pill text-center">{children}</div>;
}

function LanguageLevel({ label, filledStars }) {
  return (
    <div className="card-custom language-card">
      <strong>{label}</strong>
      <div className="text-warning fs-5" aria-hidden>
        {Array.from({ length: 5 }, (_, index) => (
          <i
            key={`${label}-${index}`}
            className={index < filledStars ? 'fas fa-star' : 'far fa-star'}
          />
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{t('skills.title')}</h2>

        <div className="section-shell">
          <h5 className="section-subtitle">{t('skills.soft.title')}</h5>
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
              <SkillPill>{t('skills.soft.communication')}</SkillPill>
            </div>
            <div className="col-6 col-md-3">
              <SkillPill>{t('skills.soft.teamwork')}</SkillPill>
            </div>
            <div className="col-6 col-md-3">
              <SkillPill>{t('skills.soft.problemSolving')}</SkillPill>
            </div>
            <div className="col-6 col-md-3">
              <SkillPill>{t('skills.soft.fastLearner')}</SkillPill>
            </div>
          </div>

          <h5 className="section-subtitle">{t('skills.languages.title')}</h5>
          <div className="row g-3 mb-4">
            <div className="col-12 col-md-4">
              <LanguageLevel label={t('skills.languages.english')} filledStars={4} />
            </div>
            <div className="col-12 col-md-4">
              <LanguageLevel label={t('skills.languages.spanish')} filledStars={5} />
            </div>
            <div className="col-12 col-md-4">
              <LanguageLevel label={t('skills.languages.arabic')} filledStars={5} />
            </div>
          </div>

          <h5 className="section-subtitle">{t('skills.tech.title')}</h5>
          <div className="row g-3">
            {techSkills.map((tech) => (
              <div key={tech} className="col-6 col-md-3 col-lg-2">
                <SkillPill>{tech}</SkillPill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
