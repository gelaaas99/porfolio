import { useTranslation } from 'react-i18next';

function LanguageSwitch({ darkMode }) {
  const { i18n } = useTranslation();

  const nextLanguage = i18n.language === 'es' ? 'en' : 'es';
  const buttonClass = darkMode ? 'btn-outline-light' : 'btn-outline-dark';

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      type="button"
      className={`btn btn-sm ${buttonClass}`}
      onClick={toggleLanguage}
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
}

export default LanguageSwitch;
