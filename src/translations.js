
const internationalization = {
  survey: {
    de: 'Umfrage',
    en: 'Survey',
    it: 'Inchiesta',
    fr: 'Sondage '  
  },
  settings: {
    de: 'Einstellungen',
    en: 'Settings',
    it: 'impostazioni',
    fr: 'Paramètres'
  }
}

function getLanguageCode() {
  const s = localStorage.getItem('language');
  if(!s || s == '' || s == 'de') return 'de';
  return s;
}

function translations(identifier) {
  const t = internationalization[identifier];
  return t[getLanguageCode()];
}

export default translations;