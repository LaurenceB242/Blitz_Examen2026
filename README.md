Arborescence complète

```
sauvegardeBlitz/
├── index.html
├── LICENSE
├── README.md
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── _reset.scss
│   │   ├── _template.scss
│   │   ├── _variables.scss
│   │   ├── contact.scss
│   │   ├── footer.scss
│   │   ├── landingPage.scss
│   │   ├── lineUp.scss
│   │   ├── mobilite.scss
│   │   ├── nav.scss
│   │   ├── planning.scss
│   │   ├── presentationArtistes.scss
│   │   ├── sponsors.scss
│   │   ├── style.scss
│   │   ├── tickets.scss
│   │   └── fonts_folders
│   │           
│   └── js/
│       └── scripts.js
├── build/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── format/
│   └── pages/
│       ├── contact.html
│       ├── lineUp.html
│       ├── mobilite.html
│       ├── planning.html
│       ├── presentationArtiste.html
│       ├── sponsors.html
│       └── tickets.html
└── index.html

    
```

Blitz — Site du Festival 2026

Résumé

Notions et technologies
- HTML sémantique : `header`, `nav`, `main`, `section`, `footer`, images avec `alt`, meta/OG.
- SCSS : partials (`_reset`, `_variables`, `_template`), `@use`, variables, maps, media-queries, compilation vers `build/css/style.css`.
- CSS modernes : Flexbox / Grid (grilles), animations (bandeau, flip-cards), états (`.active`, `.scrolled`).
- JavaScript : DOM API (`querySelector`, `getElementById`), événements (`click`, `scroll`, `resize`, `DOMContentLoaded`), `classList.toggle`, robustesse (vérifications d'existence).

Fonctionnalités principales
- Menu burger responsive + dropdown mobile
- Header qui change d'état au scroll (`.scrolled`)
- Flip-cards pour le line-up (styles via map SCSS)
- Auto-expansion de `textarea` côté contact

Fichiers clés
- `assets/css/style.scss` — point d'entrée SCSS
- `assets/js/scripts.js` — logique UI
- `build/css/style.css` — CSS compilé pour production

© Projet Blitz — structure fournie pour l'examen 2026