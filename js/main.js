// js/main.js — assemble la page et gère l'interactivité

// Composants
import { VideoCard } from "./components/VideoCard.js";
import { Sidebar } from "./components/Sidebar.js";
import { CategoryButton } from "./components/CategoryButton.js";

// Données
import { videos } from "./data/videos.js";
import { sidebarSections } from "./data/sidebar.js";
import { categories } from "./data/categories.js";

// Conteneurs : on les récupère UNE fois, au lieu de les chercher à chaque rendu
const sidebarEl = document.getElementById("sidebar");
const categoriesEl = document.getElementById("categories");
const gridEl = document.getElementById("video-grid");

// ===== ÉTAT =====
// "let" et non "const" : cette valeur va changer quand l'utilisateur clique
let activeCategory = "All";

// ===== RENDU =====

// Affiche les boutons de catégories.
// On utilise une fonction fléchée pour passer un 2e argument (la catégorie active)
// à CategoryButton. Avec .map(CategoryButton) tout seul, il recevrait l'index à la place.
function renderCategories() {
  categoriesEl.innerHTML = categories
    .map((label) => CategoryButton(label, activeCategory))
    .join("");
}

// Affiche les vidéos de la catégorie active
function renderVideos() {
  // .filter() garde uniquement les éléments pour lesquels la condition est vraie
  const visibleVideos = activeCategory === "All"
    ? videos                                                   // "All" : on garde tout
    : videos.filter((video) => video.category === activeCategory);

  gridEl.innerHTML = visibleVideos.map(VideoCard).join("");
}

// ===== ÉVÉNEMENTS (délégation : un seul écouteur par conteneur) =====

// Clic sur une catégorie
categoriesEl.addEventListener("click", (event) => {
  // closest() remonte depuis l'élément cliqué jusqu'à trouver un [data-category]
  const button = event.target.closest("[data-category]");
  if (!button) return;                         // clic à côté d'un bouton : on ignore

  activeCategory = button.dataset.category;    // 1. on change l'état
  renderCategories();                          // 2. on re-rend : le bouton cliqué devient noir
  renderVideos();                              //    et la grille est filtrée
});

// Clic sur une miniature : on la remplace par le lecteur YouTube
gridEl.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-id]");
  if (!thumb) return;                          // clic sur le texte de la carte : on ignore

  const id = thumb.dataset.id;                 // data-id="xxx" se lit avec dataset.id
  const title = thumb.querySelector("img").alt;

  // autoplay=1 : la vidéo démarre directement
  thumb.innerHTML = `
    <iframe class="w-full h-full"
            src="https://www.youtube.com/embed/${id}?autoplay=1"
            title="${title}"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>
  `;

  // On retire data-id pour qu'un 2e clic ne recrée pas le lecteur
  thumb.removeAttribute("data-id");
});

// ===== PREMIER AFFICHAGE =====
sidebarEl.innerHTML = Sidebar(sidebarSections);  // la sidebar ne change jamais : rendue une seule fois
renderCategories();
renderVideos();