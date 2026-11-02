// js/components/Sidebar.js

// Sidebar utilise SidebarItem : un composant qui en contient un autre
import { SidebarItem } from "./SidebarItem.js";

// Petit composant interne (non exporté) : le titre d'une section.
// Il n'est utilisé que dans ce fichier, donc pas besoin d'export.
function SectionTitle(section) {
  // Pas de titre ? On ne renvoie rien (chaîne vide).
  if (!section.title) return "";

  // Flèche seulement si la section la demande (hasArrow: true)
  const arrow = section.hasArrow
    ? `<i class="fa-solid fa-chevron-right text-xs text-gray-500"></i>`
    : "";

  return `
    <div class="px-4 py-1 text-sm font-semibold text-gray-900 flex items-center gap-2">
      <span>${section.title}</span>
      ${arrow}
    </div>
  `;
}

// Composant Sidebar
// Rôle : recevoir TOUTES les sections et renvoyer le contenu complet de la sidebar.
export function Sidebar(sections) {

  // 1er map : on parcourt les sections
  return sections
    .map((section) => `
      <div class="space-y-0.5">
        ${SectionTitle(section)}
        ${section.items.map(SidebarItem).join("")}   <!-- 2e map : les liens de la section -->
      </div>
    `)
    // Entre chaque section, on insère un séparateur <hr>.
    // join() met ce texte ENTRE les éléments, donc pas de <hr> en trop au début ni à la fin.
    .join(`<hr class="border-gray-200 my-3">`);
}