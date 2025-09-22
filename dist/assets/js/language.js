// language.js - Language selection functionality for Aristonis Blog

document.addEventListener('DOMContentLoaded', function() {
  initializeLanguages();
});

function initializeLanguages() {
  // Available languages with their codes and names
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];
  
  // Get elements
  const languageMenu = document.getElementById('language-menu');
  const currentLanguage = document.getElementById('current-language');
  const languageSwitcher = document.getElementById('language-switcher');
  
  if (!languageMenu || !currentLanguage || !languageSwitcher) return;
  
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('selected-language') || 'en';
  
  // Populate the language menu
  languages.forEach(lang => {
    const option = document.createElement('a');
    option.href = '#';
    option.className = 'flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700';
    option.setAttribute('data-lang', lang.code);
    option.innerHTML = `
      <span class="language-flag">${lang.flag}</span>
      <span class="language-name">${lang.name}</span>
    `;
    
    // If this is the current language, highlight it
    if (lang.code === savedLanguage) {
      option.classList.add('bg-gray-100', 'dark:bg-gray-700');
      currentLanguage.innerHTML = `
        <span class="language-flag">${lang.flag}</span>
        <span class="language-name">${lang.name}</span>
      `;
    }
    
    // Add click event
    option.addEventListener('click', function(e) {
      e.preventDefault();
      setLanguage(lang.code);
      
      // Update current language display
      currentLanguage.innerHTML = `
        <span class="language-flag">${lang.flag}</span>
        <span class="language-name">${lang.name}</span>
      `;
      
      // Hide the menu
      languageMenu.classList.add('hidden');
    });
    
    languageMenu.appendChild(option);
  });
  
  // Toggle language menu
  languageSwitcher.addEventListener('click', function(e) {
    e.stopPropagation();
    languageMenu.classList.toggle('hidden');
  });
  
  // Close menu when clicking elsewhere
  document.addEventListener('click', function() {
    languageMenu.classList.add('hidden');
  });
  
  // Prevent closing when clicking inside menu
  languageMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}

// Set the language and store preference
function setLanguage(langCode) {
  localStorage.setItem('selected-language', langCode);
  
  // Here you would normally implement language-specific content changes
  console.log(`Language changed to: ${langCode}`);
  
  // For a static demo, we're just storing the preference
  // In a real app, this would load language-specific content
  document.documentElement.setAttribute('lang', langCode);
}

// Get translations for a specific key based on current language
function getTranslation(key) {
  const currentLang = localStorage.getItem('selected-language') || 'en';
  
  // This would normally be a more comprehensive translations object
  // loaded from a separate file or API
  const translations = {
    'en': {
      'welcome': 'Welcome to Aristonis Blog',
      'home': 'Home',
      'authors': 'Authors',
      'sections': 'Sections',
      'about': 'About Us',
      'contact': 'Contact'
    },
    'es': {
      'welcome': 'Bienvenido a Aristonis Blog',
      'home': 'Inicio',
      'authors': 'Autores',
      'sections': 'Secciones',
      'about': 'Sobre Nosotros',
      'contact': 'Contacto'
    },
    'fr': {
      'welcome': 'Bienvenue sur Aristonis Blog',
      'home': 'Accueil',
      'authors': 'Auteurs',
      'sections': 'Sections',
      'about': 'À Propos',
      'contact': 'Contact'
    }
    // Other languages would be added here
  };
  
  // Try to get translation for current language, fall back to English if not found
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  } else if (translations['en'] && translations['en'][key]) {
    return translations['en'][key];
  }
  
  // Return the key itself if no translation found
  return key;
}