// js/components/SidebarItem.js

// Composant SidebarItem
// Rôle : recevoir UN lien de la sidebar et renvoyer son HTML.
export function SidebarItem(item) {

  // Condition ternaire : condition ? siVrai : siFaux
  // Si le lien a une image, on affiche une <img>, sinon une icône Font Awesome <i>.
  // L'alt reprend le label : fini les alt="youtube-shorts" partout.
  const iconHTML = item.image
    ? `<img src="${item.image}" alt="${item.label}" class="h-6 w-6 object-contain">`
    : `<i class="${item.icon} text-lg w-6 text-center"></i>`;

  return `
    <div class="flex items-center gap-5 cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-xl">
      ${iconHTML}
      <span class="text-sm">${item.label}</span>
    </div>
  `;
}