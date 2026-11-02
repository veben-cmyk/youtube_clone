// js/components/CategoryButton.js

// Composant CategoryButton
// Il reçoit maintenant la catégorie active, au lieu de deviner avec l'index.
export function CategoryButton(label, activeCategory) {

  // Le bouton est actif s'il correspond à la catégorie sélectionnée
  const isActive = label === activeCategory;

  const style = isActive
    ? "bg-black text-white"
    : "bg-gray-100 hover:bg-gray-200";

  // data-category : une étiquette invisible qui permettra à main.js
  // de savoir QUEL bouton a été cliqué
  return `
    <button data-category="${label}"
            class="${style} px-4 py-1 rounded-md text-sm whitespace-nowrap font-semibold transition-colors">
      ${label}
    </button>
  `;
}