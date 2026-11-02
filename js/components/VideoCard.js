// js/components/VideoCard.js

// Composant VideoCard
// Rôle : recevoir UNE vidéo (un objet du tableau videos) et renvoyer le HTML d'UNE carte.
// "export" permet à main.js de l'importer.
export function VideoCard(video) {

  // On retourne une chaîne de texte (template literal, entre backticks).
  // Chaque ${...} est remplacé par la valeur correspondante de l'objet video.
  return `
    <div class="cursor-pointer group">

      <!-- MINIATURE : une simple image au lieu d'une iframe (beaucoup plus léger) -->
      <!-- YouTube fournit la miniature de chaque vidéo à partir de son ID -->
    <div data-id="${video.id}" class="relative bg-gray-300 aspect-video rounded-xl overflow-hidden">
        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="fa-solid fa-play text-white text-3xl"></i>
        </div>
      </div>

      <!-- INFOS SOUS LA MINIATURE -->
      <div class="mt-3 flex gap-3 px-1">

        <!-- Avatar de la chaîne -->
        <div class="w-9 h-9 bg-gray-400 rounded-full flex-shrink-0 overflow-hidden">
          <img src="${video.avatar}" alt="${video.channel}" class="w-full h-full object-cover">
        </div>

        <!-- Titre, nom de la chaîne, vues et date -->
        <div class="flex flex-col">
          <h3 class="font-semibold text-sm text-zinc-900 line-clamp-2 leading-snug">
            ${video.title}
          </h3>
          <p class="text-xs text-gray-600 mt-1">${video.channel}</p>
          <!-- Le séparateur • est écrit UNE fois ici, pour toutes les cartes -->
          <p class="text-xs text-gray-500 mt-0.5">${video.views} • ${video.date}</p>
        </div>

      </div>
    </div>
  `;
}