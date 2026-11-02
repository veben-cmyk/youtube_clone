# YouTube Clone

Clone de l'interface de YouTube réalisé en **HTML**, **Tailwind CSS** et **JavaScript pur (ES Modules)**.
Le projet a d'abord été une maquette statique, puis a été entièrement **refactorisé en composants**, sans framework, dans le cadre d'un défi personnel : séparer les données de l'affichage, supprimer le code répétitif et ajouter de l'interactivité.

![Statut](https://img.shields.io/badge/statut-termin%C3%A9-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![ES Modules](https://img.shields.io/badge/ES%20Modules-import%2Fexport-323330?logo=javascript&logoColor=F7DF1E)
![Sans framework](https://img.shields.io/badge/framework-aucun-lightgrey)
![GitHub Pages](https://img.shields.io/badge/h%C3%A9berg%C3%A9%20sur-GitHub%20Pages-222222?logo=github&logoColor=white)
![Licence MIT](https://img.shields.io/badge/licence-MIT-blue)
[![Live Demo](https://img.shields.io/badge/demo-en%20ligne-success)](https://veben-cmyk.github.io/youtube_clone/)

## 🖼️ Aperçu

![Aperçu du projet](images/preview.png)

## ✨ Fonctionnalités

- Barre de navigation fixe (logo, recherche, icônes d'action, avatar)
- Menu latéral (sidebar) généré à partir des données, organisé en sections (*You*, *Explore*…)
- Bandeau de catégories horizontal scrollable
- **Filtrage des vidéos par catégorie** : le bouton actif change de style et la grille se met à jour
- **Lecture au clic** : chaque carte affiche une miniature légère, remplacée par le lecteur YouTube au clic
- Effet de survol sur les miniatures (zoom + icône play)
- Grille de vidéos responsive (1 à 3 colonnes selon la taille d'écran)

## 🧩 Architecture : des composants sans framework

Chaque partie répétée de l'interface est un **composant** : une fonction qui reçoit des données et renvoie du HTML.

| Composant | Rôle |
|---|---|
| `VideoCard` | Affiche une carte vidéo (miniature, avatar, titre, chaîne, vues) |
| `Sidebar` | Assemble les sections de la sidebar, séparées par des `<hr>` |
| `SidebarItem` | Affiche un lien de la sidebar (icône Font Awesome **ou** image) |
| `CategoryButton` | Affiche un bouton de catégorie, actif ou non |

`main.js` assemble la page : il donne les données aux composants, injecte le résultat dans les conteneurs, gère l'**état** (catégorie active) et les **événements** (par délégation, avec un seul écouteur par conteneur).

### Avant / après le refactoring

| | Avant | Après |
|---|---|---|
| `index.html` | ~450 lignes | ~70 lignes |
| Cartes vidéo | 9 blocs copiés-collés | 1 composant + un tableau de données |
| Chargement | 9 iframes YouTube au démarrage | 9 images légères, lecteur chargé au clic |
| Interactivité | aucune | filtre par catégorie + lecture au clic |

## 🛠️ Stack technique

- **HTML5** : structure et conteneurs de la page
- **Tailwind CSS** (via CDN) : mise en forme utilitaire
- **JavaScript (ES Modules)** : composants, données, état et événements
- **Font Awesome** : icônes
- **YouTube Embed** : miniatures et lecteur vidéo

## 📁 Structure du projet

```
youtube_clone/
├── index.html                  # Squelette de la page (navbar + conteneurs vides)
├── js/
│   ├── main.js                 # Assemble la page, gère l'état et les événements
│   ├── components/
│   │   ├── VideoCard.js
│   │   ├── Sidebar.js
│   │   ├── SidebarItem.js
│   │   └── CategoryButton.js
│   └── data/
│       ├── videos.js           # Liste des vidéos
│       ├── sidebar.js          # Sections et liens de la sidebar
│       └── categories.js       # Liste des catégories
├── images/                     # Logo, avatars, icônes locales
├── LICENSE
└── README.md
```

## 🚀 Lancer le projet en local

Aucune installation ni dépendance requise : c'est une page statique.

1. Clone le dépôt
   ```bash
   git clone https://github.com/veben-cmyk/youtube_clone.git
   cd youtube_clone
   ```
2. Ouvre le dossier dans VS Code et lance `index.html` avec l'extension **Live Server**.

> ⚠️ Le projet utilise des **modules JavaScript** (`<script type="module">`). Ouvrir `index.html` par double-clic (`file://`) ne fonctionne pas : le navigateur bloque les imports. Il faut passer par un serveur local, comme Live Server.

## ➕ Ajouter une vidéo

Grâce aux composants, ajouter une vidéo ne demande **aucune modification du HTML**. Il suffit d'ajouter un objet dans `js/data/videos.js` :

```js
{
  id: "ID_YOUTUBE",              // la fin de l'URL youtube.com/watch?v=...
  title: "Titre de la vidéo",
  category: "Music",             // doit correspondre à une valeur de categories.js
  channel: "Nom de la chaîne",
  avatar: "images/avatar.jpeg",
  views: "12 k vues",
  date: "il y a 3 jours",
},
```

## 🌱 Workflow Git (Gitflow)

Ce dépôt suit une organisation **Gitflow** simplifiée :

| Branche | Rôle |
|---|---|
| `main` | Code stable, prêt à être déployé/présenté |
| `develop` | Branche d'intégration des nouvelles fonctionnalités |
| `feature/*` | Une branche par fonctionnalité (ex : `feature/dark-mode`) |
| `refactor/*` | Réorganisation du code sans changer le comportement |
| `fix/*` | Correction de bug isolée |

Workflow type pour une nouvelle fonctionnalité :

```bash
git checkout develop
git pull
git checkout -b feature/nom-de-la-feature

# ... travail + commits ...

git push -u origin feature/nom-de-la-feature
# Ouvrir une Pull Request vers develop
```

Une fois `develop` stable, une Pull Request est ouverte vers `main` pour publier une nouvelle version.

Convention de commit utilisée : [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `style:`, `docs:`, `refactor:`…).

## 🗺️ Pistes d'amélioration

- [x] Passage en composants (JavaScript pur)
- [x] Filtrage par catégorie
- [x] Lecture vidéo au clic
- [ ] Recherche fonctionnelle (filtrage par titre)
- [ ] Menu latéral repliable (bouton ☰)
- [ ] Mode sombre
- [ ] Page de lecture vidéo dédiée
- [ ] Migration vers React pour une V2

## ⚠️ Avertissement

Projet réalisé à des fins d'apprentissage et de démonstration (portfolio). Il n'est affilié à YouTube/Google d'aucune manière ; les logos et contenus vidéo appartiennent à leurs propriétaires respectifs.

## 👤 Auteur

**Isaac Veben**
- Portfolio : [veben-cmyk.github.io/Mon_Portfolio](https://veben-cmyk.github.io/Mon_Portfolio/)
- LinkedIn : [isaac-veben](https://www.linkedin.com/in/isaac-veben-6ab4093a9/)
- GitHub : [@veben-cmyk](https://github.com/veben-cmyk)
- Démo en direct : [veben-cmyk.github.io/youtube_clone](https://veben-cmyk.github.io/youtube_clone/)

## 📄 Licence

Ce projet est sous licence MIT : voir le fichier [LICENSE](LICENSE) pour plus de détails.