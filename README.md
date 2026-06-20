# 🎵 **Blitz** - Festival 2026

> Bienvenue dans le projet du site Festival Blitz 2026 ! Un site moderne, responsive et super stylisé conçu avec une architecture SCSS propre et maintenable. 🚀

---

## 👋 C'est Quoi, Blitz ?

**Blitz** est le site web du **Festival Blitz 2026** - un festival de musique épique avec une tonne d'artistes. Le site est construit avec une architecture SCSS **super propre et organisée** : chaque page a son propre fichier, c'est tellement plus facile à lire et à modifier ! 

Imaginez un immeuble bien rangé 🏢 où chaque étage (page) a son propre style, mais tout le monde partage les mêmes couleurs et polices définies au rez-de-chaussée. C'est ça, notre architecture ! 

---

## 🎯 Les Bases (En 30 Secondes)

✅ **Un fichier = Une page du site** (nav.scss pour la nav, tickets.scss pour les tickets, etc.)

✅ **Variables partagées** qui contrôlent tout (couleurs, espacements, polices)

✅ **Compilation automatique** en un seul fichier CSS final

✅ **Responsive** du mobile au desktop sans galère

---

## 🏗️ Comment C'est Organisé ?

Voici le flux : pense à un orchestre qui enfile ses partitions avant le concert 🎼

```
📄 _variables.scss    ← Les notes (couleurs, polices, espacements)
                         partagées par TOUT le monde
                      
📄 nav.scss           ← Chaque section du site
📄 landingPage.scss      a sa propre partition
📄 lineUp.scss        
📄 ... 8 autres ...   
                      ↓
                      
📄 style.scss         ← L'orchestrateur qui dit
                         "Nav d'abord, puis landing, puis lineup..."
                      
                      ↓
                      
🎯 build/css/style.css ← LE fichier final complètement compilé
                          (celui qu'on met dans l'HTML)
```

---

## 📁 L'Arborescence du Projet

```
sauvegardeBlitz/
│
├── 📄 index.html           ← La page d'accueil du festival
├── 📄 robots.txt           ← Pour les moteurs de recherche
├── 📄 README.md            ← Ce fichier magique que je lis 👈
│
├── 📁 assets/              ← Toutes les ressources du design
│   │
│   ├── 📁 css/             ← Les styles SCSS (le cœur du projet ❤️)
│   │   ├── _reset.scss              ← "Nettoie le désordre"
│   │   ├── _variables.scss          ← 🎨 COULEURS & POLICES (LA BASE)
│   │   ├── _template.scss           ← 🎭 Couleurs uniques des artistes
│   │   ├── style.scss               ← 🧠 L'orchestrateur principal
│   │   │
│   │   ├── nav.scss                 ← 🧭 Barre de navigation
│   │   ├── landingPage.scss         ← 🏠 Page d'accueil (grosse accroche)
│   │   ├── lineUp.scss              ← 🎤 Grille des artistes (flip-cards 3D)
│   │   ├── presentationArtistes.scss ← 👤 Bio complète d'un artiste
│   │   ├── mobilite.scss            ← 🚗 Comment accéder au festival
│   │   ├── planning.scss            ← 📅 Horaires & programmation
│   │   ├── sponsors.scss            ← 🤝 Partenaires du festival
│   │   ├── tickets.scss             ← 🎫 Billetterie & tarifs
│   │   ├── contact.scss             ← 💬 Formulaire contact
│   │   ├── footer.scss              ← 🔗 Pied de page
│   │   │
│   │   ├── style.css (généré automatiquement)
│   │   └── 📁 Polices/
│   │       ├── Inter/        ← Petite et lisible (pour le texte)
│   │       ├── Itim/         ← Cursive vintage (pour les titres)
│   │       └── Lumanosimo/   ← Jolie et graphique (pour le logo)
│   │
│   └── 📁 js/
│       └── scripts.js        ← Les interactions JavaScript
│
└── 📁 build/                ← Fichiers compilés & prêts pour la prod ✅
    ├── 📁 css/
    │   └── style.css        ← CSS final (généré par SASS)
    ├── 📁 images/           ← Photos du festival
    └── 📁 pages/            ← Pages HTML du site
        ├── contact.html
        ├── lineUp.html
        ├── mobilite.html
        ├── planning.html
        ├── presentationArtiste.html
        ├── sponsors.html
        └── tickets.html
```

---

## ⚡ Quick Start - Lance le Projet

### 1️⃣ Compile les styles SCSS
```bash
sass ./assets/css/style.scss ./build/css/style.css --watch
```
> Le flag `--watch` signifie "reste branché et recompile dès que je vois un changement dans les fichiers .scss" 👀

### 2️⃣ Ouvre le site dans mon navigateur
```bash
# Sur Mac/Linux
open index.html

# Sur Windows
start index.html
```

### 3️⃣ Commence à coder ! 🎉
Modifie n'importe quel fichier `.scss` et boom - ça compile automatiquement.

---

## 🎨 Les Fichiers SCSS Expliqués (Facile !)

### 🔧 Les Fichiers de Configuration (La Fondation)

#### **_reset.scss** - "Le Nettoyeur"
C'est comme appeler un nettoyeur avant de peindre une pièce. On enlève tous les styles par défaut du navigateur qui pourrait nous pourrir le design.

```scss
* {
  margin: 0;      /* Plus de marges bizarres */
  padding: 0;     /* Plus de padding étrange */
  box-sizing: border-box;  /* Les dimensions qu'on demande, c'est les vraies */
}
```

---

#### **_variables.scss** - "La Palette de Couleurs"
C'est LA source de vérité pour tout le design. Définir une couleur ici = elle s'applique PARTOUT. 

Imagine que je veux changer le rose du site de `#FF0080` à `#FF0099` : je change à **1 seul endroit** et c'est bon. 🎨

```scss
// Couleurs principales
$primary-color: #FF0080;    /* Rose du festival */
$bg-dark: #000000;          /* Fond noir partout */
$text-light: #FFFFFF;       /* Texte blanc */

// Polices
$font-inter: 'Inter', sans-serif;
$font-lumanosimo: 'Lumanosimo', cursive;

// Espacements (je les réutilise partout)
$spacing-sm: 10px;
$spacing-md: 20px;
$spacing-lg: 40px;
```

---

#### **_template.scss** - "Les Couleurs des Artistes"
Chaque artiste du festival a sa propre couleur unique. C'est une map SCSS (genre un dictionnaire).

```scss
$artist-colors: (
  "orelsan":    (#00E7DC, #004643),    /* Bleu cyan */
  "thea":       (#FF0080, #4D0026),    /* Rose choquant */
  "damso":      (#A9EE06, #314600),    /* Vert lime */
  /* ... etc pour tous les artistes */
)
```

---

#### **style.scss** - "L'Orchestrateur"
C'est le fichier qui dit à SASS "Yo, importe tout dans cet ordre !" 

```scss
@use '_reset' as *;
@use '_variables' as *;
@use '_template' as *;
@use 'nav' as *;              /* Nav en premier */
@use 'landingPage' as *;      /* Puis landing */
@use 'lineUp' as *;           /* Puis les artistes */
@use 'presentationArtistes' as *;
/* ... et tutti quanti */
```

---

### 🎯 Les Modules Spécifiques (Une Page = Un Fichier)

#### **nav.scss** - 🧭 La Barre de Navigation
La tête du site. Elle reste collée en haut même quand je scroll (position: fixed). Elle est:
- ✅ Dynamique (rétrécit au scroll)
- ✅ Responsive (burger menu sur mobile)
- ✅ Super belle avec des effets glow

---

#### **landingPage.scss** - 🏠 La Page d'Accueil
L'accroche visuelle du festival. Grosse image d'arrière-plan, texte énorme en rose, bouton "LINE-UP" bien visibles. C'est pour dire "WOW, je suis au bon endroit !" 

---

#### **lineUp.scss** - 🎤 La Grille des Artistes
LE cœur du site. Des **flip-cards 3D** : je hover une carte et elle tourne pour révéler les infos de l'artiste. Chaque artiste a sa couleur perso (via la map de _template.scss).

Grille responsive :
- 4 colonnes sur desktop 💻
- 2 colonnes sur tablet 📱
- 1-2 colonnes sur mobile 📱

---

#### **presentationArtistes.scss** - 👤 Bio de l'Artiste
Une page complète pour chaque artiste : photo, bio, horaires d'entrée en scène, infos cool.

---

#### **mobilite.scss** - 🚗 Comment Venir
Transports en commun, parkings, instructions pour accéder au festival. "Je suis perdu ? On m'aide !"

---

#### **planning.scss** - 📅 Horaires du Festival
Qui joue quand ? Calendrier ou timeline belle et claire.

---

#### **sponsors.scss** - 🤝 Partenaires
Logos des sponsors. Ils ont payé, on les met en avant ! 😄

---

#### **tickets.scss** - 🎫 Billetterie
"Je veux aller au festival !" Formulaire d'achat, tarifs, options. C'est une page importante pour la conversion.

---

#### **contact.scss** - 💬 Nous Contacter
Formulaire de contact, email, réseaux. "Y a un souci ? Contacte-nous !"

---

#### **footer.scss** - 🔗 Pied de Page
Copyright, liens utiles, réseaux sociaux. La dernière impression du visiteur.

---

## 💡 Les Avantages de Cette Architecture

En utilisant cette structure modulaire, j'**apprenne et pratique** des concepts clés du web :

| Concept | Ce que j'apprenne | Bénéfice |
|---------|-------------------|----------|
| **Modularité** | Organiser le code en petits fichiers indépendants | 📚 Comprendre les principes SOLID |
| **Maintenabilité** | Trouver et modifier du CSS en 10 secondes | 🎯 Maîtriser la structure de projets réels |
| **Variables SASS** | Centraliser la configuration (couleurs, espacements) | 🎨 Apprendre le DRY (Don't Repeat Yourself) |
| **Responsabilité Unique** | Chaque fichier = une page/section | 🏗️ Maîtriser l'architecture logicielle |
| **Collaboration** | Travailler à plusieurs sans conflits | 👥 Pratiquer le workflow en équipe |
| **Scalabilité** | Ajouter une nouvelle page sans refondre tout | 🚀 Concevoir pour la croissance future |

#### **_reset.scss**
Réinitialise les styles par défaut du navigateur :
```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
✨ Permet de partir d'une base propre sans marges/padding parasites.

#### **_variables.scss**
Centralise **toutes les variables SASS** pour un design cohérent et maintenable :
- **Couleurs** : rose (#FF0080), bleu cyan (#00E7DC), vert (#A9EE06), etc.
- **Polices** : Inter (sans-serif), Itim (cursive), Lumanosimo (cursive)
- **Espaces** : padding, margin standards
- **Breakpoints** : points de rupture pour le responsive

💡 **Avantage** : changer une couleur au même endroit met à jour tout le site automatiquement.

#### **_template.scss**
Contient la **map SASS des couleurs artistes** :
```scss
$artist-colors: (
  "orelsan":    (#00E7DC, #004643),
  "thea":       (#FF0080, #4D0026),
  "damso":      (#A9EE06, #314600),
  ...
)
```
🎨 Utilisée dans `lineUp.scss` pour générer dynamiquement les styles de chaque flip-card d'artiste.

#### **style.scss**
**Fichier principal orchestrateur** : importe tous les fichiers de style dans le bon ordre :

```scss
@use '_reset' as *;
@use 'nav' as *;
@use 'landingPage' as *;
@use 'lineUp' as *;
@use 'presentationArtistes' as *;
@use 'mobilite' as *;
@use 'planning' as *;
@use 'sponsors' as *;
@use 'tickets' as *;
@use 'contact' as *;
@use 'footer' as *;
```
Chaque `@use` importe un module qui compile en CSS. C'est propre et organisé ! ✨

---

### **🧭 Modules Spécifiques (Par Pages/Sections)**

#### **nav.scss**
Styles de la **barre de navigation** (fixe en haut) :
- Menu horizontal (desktop) / burger menu (mobile)
- Logo + texte "LITZ" et "Festival2026" qui se réduisent au scroll
- Bouton TICKETS rose
- Effet text-shadow (halo blanc/rose selon scroll)
- Responsive : menu fullscreen sur mobile

#### **landingPage.scss**
Styles de la **page d'accueil** (Slide 1) :
- Image d'Orelsan en fond
- Titre en gros rose
- Texte d'accroche
- Bouton "LINE-UP"
- Bandeau défilant "TICKET MAIN DROP" avec animation (marquee)

#### **lineUp.scss**
Styles de la **section artistes** (Slide 3) - **Flip-cards** :
- Grille responsive d'artistes
- Recto : image + nom en bas blanc
- Verso : fond coloré + nom + info + bouton interactif
- Rotation 3D au hover
- Couleurs personnalisées via la map `$artist-colors` (génération boucle @each)
- Grille : 4 colonnes (PC) → 2 colonnes (tablet) → 2-1 colonnes (mobile)

#### **presentationArtistes.scss**
Styles détaillés d'un **profil artiste** :
- Présentation complète de l'artiste
- Bio, horaires, détails spécifiques

---

## 🚀 Modifier le Projet - Le Guide Pratique

### "Je veux ajouter une nouvelle page au festival"

**Étape 1 :** Crée le fichier `assets/css/maNouvellePage.scss`
```scss
// Réutilise les variables de _variables.scss !
.ma-section {
  background-color: $bg-dark;
  padding: $spacing-lg;
  color: $text-light;
  
  /* Mon CSS magique ici */
  
  @media (max-width: 768px) {
    padding: $spacing-md;
  }
}
```

**Étape 2 :** Ajoute l'import dans `assets/css/style.scss`
```scss
@use 'maNouvellePage' as *;
```

**Étape 3 :** Relance la compilation (si elle n'est pas déjà active avec `--watch`)

✅ **BOOM !** Ma nouvelle page est intégrée au site. Trop facile 🎉

---

### "Je veux changer la couleur rose du site"

C'est LÀ que le modulaire devient magique. Ouvre `_variables.scss` :

```scss
$primary-color: #FF0080;  /* Cherche cette ligne */
/* Change-la en */
$primary-color: #FF00FF;  /* Ou la couleur que je veux */
```

Et boom 💥 - **partout** où on utilise `$primary-color`, la couleur change. Boutons, textes, hover effects, tout. **Sans toucher à aucun autre fichier.**

Essaie ça avec un monolithe CSS de 500 lignes, tu vas pleurer 😅

---

### "Je veux ajouter un artiste avec sa couleur unique"

Ouvre `_template.scss` et ajoute à la map :

```scss
$artist-colors: (
  "orelsan": (#00E7DC, #004643),
  "thea": (#FF0080, #4D0026),
  "damso": (#A9EE06, #314600),
  "monNouvlArtiste": (#COULEUR1, #COULEUR2),  /* ← Ajoute juste ici */
)
```

Voilà, son flip-card aura automatiquement ses couleurs. La magie du SCSS ! 🎭

---

## ✅ Bonnes Pratiques (À Faire)

- 🎨 **Utilise les variables** au lieu de hardcoder des couleurs
- 📱 **Chaque fichier gère ses media queries** (ne centralise pas tout dans style.scss)
- 🏷️ **Nomme mes classes intelligemment** : `.nav-menu`, `.artist-card`, `.footer-link`, pas `.red-box`
- 💬 **Commente les sections** importantes
- 🔄 **Réutilise la map** `$artist-colors` pour la cohérence

---

## 🎓 Patterns à Adopter pour Progresser

En suivant ces bonnes pratiques, je **renforce ma compréhension** du CSS et du web :

- 🎨 **Utiliser les variables** plutôt que hardcoder (`color: $primary-color` au lieu de `color: #FF0080`) → **Apprentissage** : Comprendre la DRY et la maintenabilité
- 📁 **style.scss est un orchestrateur** (importe juste, ne contient pas de styles) → **Apprentissage** : Maîtriser la séparation des responsabilités
- 📋 **Importer tous les fichiers dans style.scss** pour qu'ils compilent → **Apprentissage** : Comprendre le système de modules SASS
- ✨ **Utiliser les transitions et transforms** au lieu de `!important` → **Apprentissage** : Maîtriser la cascade CSS et la spécificité
- 📊 **Limiter l'imbrication SCSS** (2-3 niveaux max) → **Apprentissage** : Garder le code lisible et performant

---

## 🎯 Le Design Global en Nutshell

### 🎨 Couleurs
| Élément | Couleur | Variable |
|---------|---------|----------|
| 🌹 Accent principal | Rose vif | `$primary-color: #FF0080` |
| 🖤 Fond | Noir | `$bg-dark: #000000` |
| ⚪ Texte | Blanc | `$text-light: #FFFFFF` |
| 🎭 Artistes | Variables | `$artist-colors` (map) |

### 🔤 Typographie
- **Inter** : Texte courant (lisible, moderne)
- **Lumanosimo** : Logo & grands titres (graphique, branché)
- **Itim** : Accents cursifs (un peu rétro, cool)

### 📱 Responsive
| Device | Breakpoint | Colonnes (grid) |
|--------|-----------|---|
| 📺 Desktop | 1300px+ | 4 colonnes |
| 📱 Tablet | 768px - 1024px | 2 colonnes |
| 📱 Mobile | max 768px | 1-2 colonnes |

---

## 🤔 Questions FAQ

### "Ça compile en combien de temps ?"
2-3 secondes max. SASS c'est ultra rapide.

### "J'dois installer quelque chose ?"
Oui, SASS. En général je fais `npm install sass` ou j'ai peut-être une extension VS Code pour ça.

### "Pourquoi pas du Tailwind ou Bootstrap ?"
Parce que mon design est custom et trop beau pour un framework générique ! 😎

### "Ça marche sur mobile ?"
Oui, il y a des media queries à tous les niveaux. Responsive depuis le mobile jusqu'au 4K.

---

## 📞 Besoin d'Aide ?

Des questions sur le structure ? Des trucs bizarres ? 

**Checklist du debugging :**
- ✅ Le SASS compile (regarde la console)
- ✅ J'ai importé mon fichier dans `style.scss` ?
- ✅ J'utilise les bonnes variables (`$primary-color` existe ?)
- ✅ Les sélecteurs CSS sont correctement spécifiés ?
- ✅ Y a pas de typo dans les noms de fichier ?

---

## 🎉 C'est Parti !

J'ai maintenant une architecture SCSS **propre, modulaire et professionnelle** avec laquelle je vais **apprendre et maîtriser** :

✨ L'organisation d'un vrai projet web
✨ Les bonnes pratiques SCSS et CSS
✨ La collaboration en équipe efficace
✨ Comment structurer pour l'avenir

**À chaque modification, je vais renforcer ma compréhension** de comment les vrais projets sont construits. C'est ça, progresser ! 🚀

P.S. - Les commentaires dans le code, c'est un super moyen de documenter ma pensée. Future moi (ou quelqu'un d'autre) me remerciera ! 💚