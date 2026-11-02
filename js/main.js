
// on importe le composant et les données depuis leurs fichiers
import { VideoCard } from "./components/VideoCard.js";   // ".js" obligatoire dans le navigateur
import { videos } from "./data/videos.js";
import { Sidebar } from "./components/Sidebar.js";
import { sidebarSections } from "./data/sidebar.js";
import { categories } from "./data/categories.js";
import { CategoryButton } from "./components/CategoryButton.js";

// main.js ne fait qu'assembler : il prend les données et les passe au composant
document.getElementById("video-grid").innerHTML =
videos.map(VideoCard).join("");

document.getElementById("sidebar").innerHTML =
Sidebar(sidebarSections);

document.getElementById("categories").innerHTML = categories.map(CategoryButton).join("");