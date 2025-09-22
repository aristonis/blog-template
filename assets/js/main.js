// main.js - Common JavaScript functionality for Aristonis Blog

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initLanguageSelector();
  initUserMenu();
  initDropdowns();
});

// Dark mode toggle functionality
function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (!darkModeToggle) return;
  
  const iconElement = darkModeToggle.querySelector('i');
  
  // Check for saved theme preference or prefer-color-scheme
  if (localStorage.getItem('color-theme') === 'dark' || 
      (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if (iconElement) {
      iconElement.classList.remove('fa-moon');
      iconElement.classList.add('fa-sun');
    }
  } else {
    document.documentElement.classList.remove('dark');
    if (iconElement) {
      iconElement.classList.remove('fa-sun');
      iconElement.classList.add('fa-moon');
    }
  }
  
  // Add click event listener to toggle dark mode
  darkModeToggle.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      if (iconElement) {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
      }
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      if (iconElement) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
      }
    }
  });
}
//  const languageSwitcher = document.getElementById('language-switcher');
//     const languageMenu = document.getElementById('language-menu');
//     const currentLanguage = document.getElementById('current-language');
//     const languageOptions = document.querySelectorAll('.language-option');
    
//     languageSwitcher.addEventListener('click', function(e) {
//       e.stopPropagation();
//       languageMenu.classList.toggle('hidden');
//     });
    
//     // Close language menu when clicking elsewhere
//     document.addEventListener('click', function() {
//       languageMenu.classList.add('hidden');
//     });
    
//     // Prevent menu closing when clicking inside it
//     languageMenu.addEventListener('click', function(e) {
//       e.stopPropagation();
//     });
    
//     // Language selection
//     languageOptions.forEach(option => {
//       option.addEventListener('click', function() {
//         const lang = this.getAttribute('data-lang');
//         const langText = this.textContent.trim();
//         currentLanguage.textContent = langText;
//         languageMenu.classList.add('hidden');
//         // Here you would normally update the page content based on selected language
//         console.log(`Language changed to: ${lang}`);
//       });
//     });
    

// Language selector dropdown
function initLanguageSelector() {
  const languageSwitcher = document.getElementById('language-switcher');
  const languageMenu = document.getElementById('language-menu');
  const currentLanguage = document.getElementById('current-language');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (!languageSwitcher || !languageMenu || !currentLanguage) return;
  
  // Toggle language menu visibility
  languageSwitcher.addEventListener('click', function(e) {
    e.stopPropagation();
    languageMenu.classList.toggle('hidden');
  });
  
  // Close language menu when clicking elsewhere
  document.addEventListener('click', function() {
    if (languageMenu) {
      languageMenu.classList.add('hidden');
    }
  });
  
  // Prevent menu closing when clicking inside it
  if (languageMenu) {
    languageMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Language selection
  if (languageOptions) {
    languageOptions.forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        const langText = this.textContent.trim();
        currentLanguage.textContent = langText;
        languageMenu.classList.add('hidden');
        
        // Store the selected language preference
        localStorage.setItem('selected-language', lang);
        
        // Here you would normally update the page content based on selected language
        console.log(`Language changed to: ${lang}`);
      });
    });
  }
  
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('selected-language');
  if (savedLanguage) {
    const option = document.querySelector(`.language-option[data-lang="${savedLanguage}"]`);
    if (option) {
      currentLanguage.textContent = option.textContent.trim();
    }
  }
}

// User menu dropdown
function initUserMenu() {
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
  
  if (!userMenuButton || !userMenu) return;
  
  // Toggle user menu visibility
  userMenuButton.addEventListener('click', function(e) {
    e.stopPropagation();
    userMenu.classList.toggle('hidden');
  });
  
  // Close user menu when clicking elsewhere
  document.addEventListener('click', function() {
    if (userMenu) {
      userMenu.classList.add('hidden');
    }
  });
  
  // Prevent menu closing when clicking inside it
  if (userMenu) {
    userMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
}

// Initialize all dropdown menus
function initDropdowns() {
  // Any other dropdowns can be initialized here
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
  
  dropdownTriggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-dropdown-target');
    const target = document.getElementById(targetId);
    
    if (target) {
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        target.classList.toggle('hidden');
      });
      
      document.addEventListener('click', function() {
        target.classList.add('hidden');
      });
      
      target.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
}

// Function to handle form submissions
function handleFormSubmit(formId, redirectUrl, validateFn) {
  const form = document.getElementById(formId);
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // If validation function exists, run it
    if (validateFn && typeof validateFn === 'function') {
      const isValid = validateFn(form);
      if (!isValid) return;
    }
    
    // In a real application, send data to server
    // For this static demo, just redirect
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}

// Helper function to toggle visibility of an element
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle('hidden');
  }
}

// Function to load content dynamically (for demonstration)
function loadContent(containerId, content) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = content;
  }
}