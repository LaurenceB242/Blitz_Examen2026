# Blitz - Structure et Organisation du Projet

## 📁 Architecture du Site

```
sauvegardeBlitz/
├── index.html                 # Page d'accueil du site
├── robots.txt                 # Instructions pour les moteurs de recherche
├── assets/                    # Ressources source (CSS, JS, fonts)
│   ├── css/                   # Fichiers de stylisation
│   │   ├── _reset.scss        # Reset CSS personnalisé
│   │   ├── _template.scss     # Styles template/layout
│   │   ├── _variables.scss    # Variables SASS (couleurs, fonts, etc.)
│   │   ├── style.scss         # Fichier principal SASS
│   │   ├── style.css          # CSS compilé (généré)
│   │   ├── Inter/             # Police Inter
│   │   ├── Itim/              # Police Itim
│   │   └── Lumanosimo/        # Police Lumanosimo
│   └── js/
│       └── scripts.js         # Scripts JavaScript personnalisés
├── build/                     # Fichiers compilés et générés
│   ├── css/
│   │   └── style.css          # CSS compilé (sortie SASS)
│   ├── images/                # Images optimisées/générées
│   └── pages/                 # Pages HTML compilées/générées
│       ├── contact.html       # Page de contact
│       ├── lineUp.html        # Lineup d'artistes
│       ├── mobilite.html      # Informations mobilité
│       ├── planning.html      # Planning d'événement
│       ├── presentationArtiste.html  # Présentation des artistes
│       ├── sponsors.html      # Page des sponsors
│       └── tickets.html       # Billetterie
└── README.md                  # Ce fichier
```

## 📋 Description de chaque dossier

### 🏠 **Racine du projet**
- **index.html** : Page d'accueil principale du site
- **robots.txt** : Fichier pour indiquer aux moteurs de recherche comment explorer le site
- **README.md** : Documentation du projet

### 📦 **assets/**
Contient toutes les ressources source du site :
- **css/** : Feuilles de style SCSS et fonts
  - Fichiers `.scss` modifiables → compilés en `style.css`
  - Polices personnalisées pour le design
- **js/** : Scripts JavaScript pour les interactions utilisateur

### 🏗️ **build/**
Dossier de sortie contenant les fichiers compilés et prêts pour la production :
- **css/style.css** : Sortie compilée du SCSS (généré automatiquement)
- **images/** : Images du site
- **pages/** : Pages HTML du site (contact, planning, sponsors, tickets, etc.)

---

# 🎨 Architecture SASS

## 📁 Structure des fichiers SCSS

```
assets/css/
├── _reset.scss          # Reset CSS (marges/padding par défaut)
├── _variables.scss      # Variables globales (couleurs, polices)
├── _template.scss       # Map des couleurs des artistes
└── style.scss           # Fichier principal (importe tout + styles)
```

## 📋 Description de chaque fichier SCSS

### **_reset.scss**
Fichier minimal qui réinitialise les styles par défaut du navigateur :
```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
Utile pour partir d'une base propre sans marges/padding parasites.

### **_variables.scss**
Centralise toutes les **variables SASS** pour un design cohérent :
- **Couleurs page d'accueil** : rose, vert, magenta
- **Couleurs cartes artistes** : bleu cyan, rose, vert, mauve, orange, rouge
- **Polices** : Inter (sans-serif), Itim (cursive), Lumanosimo (cursive)

Avantage : modifier une couleur au même endroit met à jour tout le site.

### **_template.scss**
Contient la **map SASS des couleurs artistes** :
```scss
$artist-colors: (
  "orelsan":    (#00E7DC, #004643),
  "thea":       (#FF0080, #4D0026),
  "damso":      (#A9EE06, #314600),
  ...
)
```
Utilisée dans le style.scss pour générer dynamiquement les styles de chaque flip-card d'artiste.

### **style.scss**
Fichier principal qui contient **tous les styles du site**, organisé par section :

---

## 🗂️ Sections du style.scss

Le fichier est structuré pour correspondre à la structure HTML et à la navigation des pages :

### 1️⃣ **HEADER & NAVIGATION** (Fixe en haut)
- **Menu horizontal** (desktop) / burger menu (mobile/tablet)
- **Logo + texte** "LITZ" et "Festival2026" qui se réduisent au scroll
- **Bouton TICKETS** rose
- Effet **text-shadow** (halo blanc/rose selon scroll)
- **Responsive** : le menu devient fullscreen sur mobile

### 2️⃣ **SLIDE 1 - Landing Page** (`.slide-1`)
Page d'accueil avec image d'Orelsan en fond :
- Titre "Orelsan" en gros rose
- Texte "Retrouve Orelsan le samedi 11 juillet 2026"
- Bouton "LINE-UP"
- **Bandeau défilant** en bas avec "TICKET MAIN DROP" répété (effet marquee)

### 3️⃣ **SLIDE 2 - Section INFO** (`.slide-2`)
Grille de 3 cartes sur fond sombre (#333333) :
- **Carte 1** : TICKETS
- **Carte 2** : PLANNING
- **Carte 3** : MOBILITÉ

Chaque carte :
- Image en noir & blanc (grayscale) au départ
- **Hover** : image en couleur + zoom 1.05 + titre rose
- Arrangement **diagonal** (1ère monte, 2ème centre, 3ème descend)
- Responsive : devient 1 colonne sur mobile

### 4️⃣ **SLIDE 3 - LINE-UP (Flip Cards)** (`.slide3`)
Grille d'artistes avec des **flip-cards** :
- **Recto** : image de l'artiste + nom en bas blanc
- **Verso** : fond coloré + nom + info + bouton interactif
- Chaque artiste a sa **couleur personnalisée** (via la map `$artist-colors`)
- **Grille responsive** : 4 colonnes (PC) → 2 colonnes (tablet) → 2-1 colonne (mobile)

Les couleurs sont générées dynamiquement avec `@each` en boucle sur la map.

---

## 🔄 Responsive Design

Le site utilise **Media Queries** pour adapter le layout :

| Breakpoint | Contexte | Changements |
|---|---|---|
| **1025px+** | Desktop | Menu horizontal, 4 colonnes artistes |
| **768px - 1024px** | Tablet | Menu burger, grille 2 colonnes |
| **max 768px** | Mobile | Menu fullscreen, grille 1-2 colonnes |

---

## 🎯 Logique de Design Global

### **Thème Visuel**
- Fond **noir (#000)** partout (exception slide-2 → #333333)
- Accent couleur **rose (#FF0080)** pour tous les CTA (boutons, texte important)
- Typographie **Inter** pour le texte, **Lumanosimo** pour le logo

### **Interactivité**
- **Hover** sur liens → couleur rose + glow text-shadow
- **Scroll** → header réduit (logo petit, "Festival" disparaît)
- **Flip-cards** → rotation 180° au hover avec perspective 3D
- **Bandeau tickets** → animation infinie qui défile

### **Séquence de Contenu**
1. **Slide 1** : Accroche visuelle (Orelsan)
2. **Slide 2** : 3 boutons d'accès aux pages principales
3. **Slide 3** : Tous les artistes du festival en flip-cards

---

## 🛠️ Compilation SASS

Pour compiler le SCSS en CSS :
```bash
sass ./assets/css/style.scss ./build/css/style.css --watch
```

Le fichier compilé `build/css/style.css` est généré automatiquement et inclus dans l'HTML.

---

# 📚 Matières HTML & CSS Utilisées

## 🏷️ **Concepts HTML**

### Éléments Sémantiques
- `<header>` - En-tête avec logo et navigation fixe
- `<nav>` - Barre de navigation (menu horizontal/burger)
- `<main>` - Contenu principal
- `<section>` - Slides (slide-1, slide-2, slide-3)
- `<a>` - Liens (vers pages, tickets, menu)
- `<button>` - Boutons interactifs

### Éléments Structurels
- `<div>` - Conteneurs génériques (container, grid, etc.)
- `<ul>` & `<li>` - Listes (menu, sous-menu)
- `<img>` - Images (logo, artistes, cartes)

### Attributs Importants
- `class` - Sélecteurs CSS (menu, sous-menu, card-diagonal, etc.)
- `id` - Identifiants (menu, btn-burger, info)
- `href` - Liens vers pages/sections
- `src` & `alt` - Images et descriptions
- `data-*` - Attributs de données (potentiel)

---

## 🎨 **Propriétés CSS/SCSS Utilisées**

### 📏 **Mise en Page (Layout)**
- `display: flex` - Menu horizontal, flexbox layouts
- `display: grid` - Grille artistes (4/2/1 colonnes), grille cartes
- `display: none/block` - Affichage/masquage éléments
- `position: fixed` - Header fixe
- `position: absolute` - Menu burger, sous-menus, badges
- `position: relative` - Positionnement relatif

### 🔄 **Flexbox & Grid**
- `flex-direction: column` - Disposition verticale
- `flex-direction: row` - Disposition horizontale
- `justify-content: space-between/center` - Alignement horizontal
- `align-items: center/flex-end` - Alignement vertical
- `gap: 20px/40px/100px` - Espace entre éléments
- `grid-template-columns: repeat(4, 1fr)` - Grille 4 colonnes
- `grid-template-columns: 1fr` - Grille 1 colonne (mobile)

### 🎯 **Transformation & Animation**
- `transform: translateX/Y/Z()` - Mouvement
- `transform: rotate()` - Rotation (burger, verso flip-card)
- `transform: scale()` - Zoom (hover images)
- `transform: rotateY()` - Rotation 3D (flip-card)
- `transform-style: preserve-3d` - Perspective 3D
- `perspective: 1000px` - Effet profondeur
- `backface-visibility: hidden` - Masque le verso en 3D
- `transition: all 0.3s/0.6s ease` - Animation fluide

### ✨ **Animations Keyframes**
- `@keyframes scrollMarquee` - Défilement infini du bandeau tickets

### 📱 **Media Queries**
- `@media (max-width: 768px)` - Mobile
- `@media (min-width: 768px) and (max-width: 1024px)` - Tablet
- `@media (min-width: 1025px)` - Desktop

### 🌈 **Couleurs & Fond**
- `background-color` - Couleur de fond (#000, #333333, etc.)
- `background-image: url()` - Images de fond
- `background-size: cover` - Remplissage du fond
- `background-position: center` - Positionnement fond
- `color` - Couleur du texte
- `filter: grayscale()` - Noir & blanc (cartes artistes)
- `filter: brightness/invert()` - Modification du logo
- `opacity` - Transparence

### 📝 **Typographie**
- `font-family: $font-inter/itim/lumanosimo` - Polices personnalisées
- `font-size: 1rem/2rem/3.5rem` - Taille du texte
- `font-weight: bold/900` - Épaisseur du texte
- `text-transform: uppercase` - Majuscules
- `letter-spacing: 2px` - Espacement lettres
- `line-height: 1.2` - Hauteur de ligne
- `text-align: center/left` - Alignement texte
- `text-shadow` - Ombre texte (halo glow sur menu)
- `white-space: nowrap` - Pas de retour à la ligne

### 🎁 **Effets Visuels**
- `box-shadow: 0 6px rgba()` - Ombre bouton
- `text-shadow: 0 0 10px rgba()` - Halo sur menu
- `border: 2px/4px/30px solid` - Bordures (cartes, boutons)
- `border-radius: 50px` - Bordures arrondies (boutons)
- `backdrop-filter: blur(10px)` - Flou arrière-plan (menu tablet)

### 📦 **Espacement & Boîte**
- `margin: 0/20px/auto` - Marges externes
- `padding: 0/10px/20px` - Marges internes
- `box-sizing: border-box` - Calcul dimensions
- `width: 100%/90%` - Largeur
- `height: 100vh/400px` - Hauteur
- `max-width: 1200px/1400px` - Largeur max

### 🔗 **Pseudo-classes & Pseudo-éléments**
- `:hover` - Au survol (couleur rose, zoom)
- `:active` - Au clic (transformation bouton)
- `:nth-child()` - Sélection par position (diagonal slide-2, SVG menu)
- `::after` - Élément pseudo (SVG soulignement, contenu marquee)
- `::before` - Élément pseudo

### 👁️ **Visibilité & Interactions**
- `visibility: visible/hidden` - Visibilité
- `overflow: hidden` - Coupe le contenu qui dépasse
- `overflow-x: hidden` - Pas de scroll horizontal
- `overflow-y: auto` - Scroll vertical si nécessaire
- `cursor: pointer` - Curseur cliquable
- `pointer-events: auto/none` - Activation/désactivation clics
- `z-index: 1000/999/10` - Couches (header au-dessus)

### 📐 **Objets & Images**
- `object-fit: cover` - Image remplit le conteneur
- `object-position: top center` - Position image
- `aspect-ratio: 1/1` - Carré parfait (flip-cards)

### 🎨 **Variables CSS (SASS)**
- `$color-cardRose`, `$color-cardBlue`, etc. - Couleurs
- `$font-inter`, `$font-itim` - Polices
- `--artist-color`, `--text-color` - Variables dynamiques par artiste

---

## 📊 Tableau Récapitulatif

| Catégorie | Propriétés Principales |
|---|---|
| **Layout** | flexbox, grid, position (fixed/absolute) |
| **Animation** | transform, transition, @keyframes |
| **Responsive** | @media queries, grid-template-columns |
| **Visual** | filter, box-shadow, text-shadow, border |
| **Text** | font-family, font-size, text-transform, letter-spacing |
| **Interactive** | :hover, :active, cursor, pointer-events |
| **3D** | perspective, transform-style, backface-visibility, rotateY |