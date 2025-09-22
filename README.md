# Aristonis Blog Template

A modern, responsive blog template for multilingual content creators, built with HTML, CSS, JavaScript, and Tailwind CSS. Features a clean layout for articles, author profiles, and reader engagement.

## Features

- **Responsive Design**: Mobile-first with hamburger menu.
- **Dark/Light Mode**: Toggleable theme with localStorage persistence.
- **Multilingual Support**: Language selector (English, Español, Français, Deutsch, 中文).
- **User Dashboard**: Profile dropdown with settings, statistics, and logout.
- **Blog Sections**: Home with latest articles, sidebar for popular posts/authors/categories, pagination.
- **Contact Form**: Form with validation hooks.
- **Preline UI**: Accordions and overlays for enhanced UX.

## Technologies

- **Frontend**: HTML5, Tailwind CSS (CDN), Custom CSS.
- **JavaScript**: Vanilla JS (`main.js`).
- **Icons**: Font Awesome 6.
- **UI Library**: Preline UI for overlays/accordions.
- **Storage**: localStorage for theme/language preferences.

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, etc.).
- No build tools required (uses CDNs).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/aristonis/blog-template.git
   cd blog-template
   ```

2. **Serve the Project**:
   - Open `index.html` in a browser (double-click or drag into Chrome).

3. **Verify Setup**:
   - Confirm assets (`assets/css/custom.css`, `assets/js/main.js`, `assets/js/language.js`) load.
   - Check browser console (F12) for errors.

## File Structure

```
blog-template/dist
├── index.html              # Home page (articles, sidebar)
├── contact.html            # Contact form and info
├── about.html              # About page
├── authors.html            # Authors listing
├── sections.html           # Sections/categories
├── post.html               # Single post view
├── assets/
│   ├── css/
│   │   └── custom.css      # Dark mode, toggle styles
│   ├── js/
│   │   ├── main.js         # Core logic: dark mode, menus
│   │   └── language.js     # Language handling
│   └── images/
│       ├── user-avatar.png # Profile image
│       └── pc-img.png      # Post thumbnails
└── README.md               # This file
```

## Usage

- **Theme Toggle**: Click moon/sun icon (bottom-right) for light/dark mode.
- **Mobile Menu**: Tap hamburger icon to toggle menu.
- **Language Switch**: Select language from dropdown (extend in `language.js`).
- **Add Articles**: Duplicate article cards in `index.html`.
- **Contact Form**: Use `contact.html` form (extend `handleFormSubmit` in `main.js`).

## Customization

- **Content**: Edit HTML files for articles/authors.
- **Styles**: Update `assets/css/custom.css`.
- **Functionality**: Modify `main.js` or `language.js`.
- **Images**: Replace placeholders in `assets/images/`.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push: `git push origin feature/your-feature`.
5. Open a Pull Request.

## License

MIT License © 2025 Aristonis. See [LICENSE](LICENSE) for details.