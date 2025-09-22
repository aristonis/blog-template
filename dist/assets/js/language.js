// language.js - Language selection functionality for Aristonis Blog

document.addEventListener('DOMContentLoaded', function () {
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
    const languageSwitcher = document.getElementById('language-switcher'); // This should be the button/container

    // Check if essential elements exist
    if (!languageMenu || !currentLanguage || !languageSwitcher) {
        console.warn("Language selector elements (language-menu, current-language, language-switcher) not found. Initialization skipped.");
        return;
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selected-language') || 'en';

    // Clear existing menu items (good practice)
    languageMenu.innerHTML = '';

    // Populate the language menu
    languages.forEach(lang => {
        // Create the <a> element for the option
        const option = document.createElement('a');
        option.href = '#'; // Prevent default link behavior
        // Use class names matching your existing HTML structure from Pasted_Text_1758532690364.txt
        // e.g., 'flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm...'
        option.className = 'language-option flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200';
        option.setAttribute('data-lang', lang.code);
        option.innerHTML = `
            <span class="language-flag">${lang.flag}</span>
            <span class="language-name">${lang.name}</span>
        `;

        // Set initial current language display if it matches the saved preference
        // and hasn't been set yet
        if (lang.code === savedLanguage && !currentLanguage.querySelector('.language-flag')) {
            currentLanguage.innerHTML = `
                <span class="language-flag">${lang.flag}</span>
                <span class="language-name">${lang.name}</span>
            `;
        }

        // Add click event listener for each language option
        option.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link click behavior (# jump)
            e.stopPropagation(); // *** KEY ***: Stop the click from bubbling up to parent elements (like languageSwitcher or document)

            // Update language logic
            setLanguage(lang.code, lang.flag, lang.name);

            // Update current language display
            currentLanguage.innerHTML = `
                <span class="language-flag">${lang.flag}</span>
                <span class="language-name">${lang.name}</span>
            `;

            // Hide the menu after selection
            languageMenu.classList.add('hidden');
        });

        // Append the option to the menu
        languageMenu.appendChild(option);
    });

    // --- Menu Toggle and Close Logic ---

    // 1. Toggle menu visibility when the language switcher *button* is clicked
    languageSwitcher.addEventListener('click', function (e) {
        // e.preventDefault(); // Good if it's an <a>, harmless if <button>
        // *** MOST IMPORTANT LINE BELOW ***
        e.stopPropagation(); // *** KEY ***: Prevent this click from immediately reaching the document listener
        languageMenu.classList.toggle('hidden');
    });

    // 2. Close menu when clicking anywhere else on the document
    document.addEventListener('click', function (e) {
        // If the menu is currently open, close it
        // This check ensures we don't add 'hidden' unnecessarily every click
        if (!languageMenu.classList.contains('hidden')) {
             languageMenu.classList.add('hidden');
        }
        // Because of stopPropagation in the switcher/button click,
        // clicking the button won't trigger this document listener
        // immediately after the toggle. Clicking an option also uses
        // stopPropagation, so it closes the menu but doesn't re-open it
        // via the button's toggle.
    });

    // 3. Prevent clicks inside the menu from closing it
    // (The stopPropagation in the option click listener handles this,
    // but adding it to the menu container is an extra safety measure).
    languageMenu.addEventListener('click', function (e) {
        e.stopPropagation(); // *** KEY ***: Prevent menu clicks from reaching the document listener
    });
}

// Set the language, store preference, and update display attributes
function setLanguage(langCode, flag, name) {
    localStorage.setItem('selected-language', langCode);
    document.documentElement.setAttribute('lang', langCode); // Update HTML lang attribute
    console.log(`Language changed to: ${langCode} (${name})`);
    // In a full app, you'd trigger content translation/reload here
}

// --- Optional: Keep getTranslation function if you plan to use it later ---
// Get translations for a specific key based on current language
function getTranslation(key) {
    const currentLang = localStorage.getItem('selected-language') || 'en';

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
        // Add more languages...
    };

    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    } else if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key; // Fallback to the key itself
}
