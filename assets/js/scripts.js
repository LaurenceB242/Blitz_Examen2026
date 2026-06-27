
// 1. NAVIGATION (MENU BURGER & DROPDOWN)
const burger = document.getElementById("btn-burger");
const menu = document.getElementById("menu");

// On vérifie que le burger existe sur la page avant d'ajouter l'écouteur
if (burger && menu) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
    });
}

/* DROPDOWN MOBILE */
document.querySelectorAll(".sous-menu-mobile").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parent = toggle.parentElement;
        if (parent) {
            parent.classList.toggle("active");
        }
    });
});

// 2. GESTION DU HEADER AU DEFILEMENT
function manageHeaderState() {
    const header = document.querySelector('header');
    const slide1 = document.querySelector('.slide-1');

    // SÉCURITÉ : Si on est sur une page sans ".slide-1", on applique une règle par défaut ou on stoppe
    if (!slide1 || !header) {
        // Optionnel : Si pas de slide-1 (autres pages), on peut forcer le header en mode 'scrolled'
        if (header) header.classList.add('scrolled');
        return;
    }

    // Position et dimensions en temps réel
    const rect = slide1.getBoundingClientRect();
    const threshold = 0.2;

    // Calcul du scroll
    if (rect.bottom < (rect.height * threshold)) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Écouteurs d'événements
window.addEventListener('scroll', manageHeaderState);
window.addEventListener('resize', manageHeaderState);

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", manageHeaderState);

// 3. LINE UP
document.addEventListener("DOMContentLoaded", () => {
    // Vérifie si l'URL contient "lineUp"
    if (window.location.href.includes("lineUp")) {
        const header = document.querySelector('header');
        if (header) {
            header.classList.add('scrolled');
        }
    }
});

// 4. Contact
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("message");

    if (textarea) {
        textarea.addEventListener("input", function () {
            this.style.height = "auto"; // Réinitialise
            this.style.height = this.scrollHeight + "px"; // S'adapte au texte
        });
    }
});

/*
//NAVIGATION

const burger = document.getElementById("btn-burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
});

/* DROPDOWN MULTI SAFE */
/*
document.querySelectorAll(".sous-menu-mobile").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parent = toggle.parentElement;
        parent.classList.toggle("active");
    });
});

function manageHeaderState() {
    const header = document.querySelector('header');
    const slide1 = document.querySelector('.slide-1');

    // Position et dimensions en temps réel
    const rect = slide1.getBoundingClientRect();

    // Facteur de précision : 0.5 représente exactement la moitié
    const threshold = 0.2;

    // Calcul : si le bas de la slide est à moins de 50% de la hauteur totale
    // Le calcul utilise rect.height * threshold pour plus de précision
    if (rect.bottom < (rect.height * threshold)) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', manageHeaderState);
window.addEventListener('resize', manageHeaderState);

// Initialisation
manageHeaderState();

//sponsors
const burger2 = document.getElementById("btn-burger"); // Renommé temporairement pour éviter les conflits textuels
const menu2 = document.getElementById("menu");

burger2.addEventListener("click", () => {
    menu2.classList.toggle("active");
    burger2.classList.toggle("active");
});

/* DROPDOWN MULTI SAFE */
/*
document.querySelectorAll(".sous-menu-mobile").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parent = toggle.parentElement;
        parent.classList.toggle("active");
    });
});

function manageHeaderState2() {
    const header = document.querySelector('header');
    const slide1 = document.querySelector('.slide-1');

    // Position et dimensions en temps réel
    const rect = slide1.getBoundingClientRect();

    // Facteur de précision : 0.5 représente exactement la moitié
    const threshold = 0.2;

    // Calcul : si le bas de la slide est à moins de 50% de la hauteur totale
    // Le calcul utilise rect.height * threshold pour plus de précision
    if (rect.bottom < (rect.height * threshold)) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', manageHeaderState2);
window.addEventListener('resize', manageHeaderState2);

// Initialisation
manageHeaderState2();
*/