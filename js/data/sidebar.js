// js/data/sidebar.js

// La sidebar est un tableau de SECTIONS.
// Chaque section a un titre (ou null) et son propre tableau de liens (items).
// Chaque lien a soit une "icon" (classe Font Awesome), soit une "image" (chemin d'image).
export const sidebarSections = [
  {
    title: null,                                   // 1re section : pas de titre
    items: [
      { label: "Home", image: "images/accueil.png" },
      { label: "Shorts", image: "https://img.icons8.com/material-outlined/24/youtube-shorts.png" },
    ],
  },
  {
    title: null,
    items: [
      { label: "Subscriptions", icon: "fa-solid fa-layer-group" },
    ],
  },
  {
    title: "You",
    hasArrow: true,                                // le titre "You" a une petite flèche >
    items: [
      { label: "Your channel", icon: "fa-regular fa-id-card" },
      { label: "History", icon: "fa-solid fa-clock-rotate-left" },
      { label: "Playlists", image: "images/play-list.png" },
      { label: "Your videos", icon: "fa-solid fa-clapperboard" },
      { label: "Watch later", icon: "fa-regular fa-clock" },
      { label: "Liked videos", icon: "fa-solid fa-thumbs-up" },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "Trending", icon: "fa-solid fa-fire" },
      { label: "Shopping", icon: "fa-solid fa-bag-shopping" },
      { label: "Music", icon: "fa-solid fa-music" },
      { label: "Movies", icon: "fa-solid fa-film" },
      { label: "Live", icon: "fa-solid fa-tower-broadcast" },
      { label: "Gaming", icon: "fa-solid fa-gamepad" },
      { label: "News", icon: "fa-regular fa-newspaper" },
      { label: "Sports", icon: "fa-solid fa-trophy" },
    ],
  },
  {
    title: null,
    items: [
      { label: "Settings", icon: "fa-solid fa-gear" },
      { label: "Report history", icon: "fa-regular fa-flag" },
      { label: "Help", icon: "fa-regular fa-circle-question" },
      { label: "Send feedback", icon: "fa-solid fa-circle-exclamation" },
    ],
  },
];