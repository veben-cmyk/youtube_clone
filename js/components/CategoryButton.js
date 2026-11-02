// js/components/CategoryButton.js

// Composant CategoryButton
// .map() passe automatiquement 2 arguments : l'élément ET sa position (index)
export function CategoryButton(label, index) {

  // Le 1er bouton (index 0, "All") est actif : fond noir.
  // Les autres sont gris.
  const style = index === 0
    ? "bg-black text-white"
    : "bg-gray-100 hover:bg-gray-200";

  return `
    <button class="${style} px-4 py-1 rounded-md text-sm whitespace-nowrap font-semibold">
      ${label}
    </button>
  `;
}