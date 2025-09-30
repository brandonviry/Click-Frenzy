# 🎯 Click Frenzy

Un jeu de réflexes addictif où vous devez cliquer sur des cibles le plus rapidement possible pour maximiser votre score en 30 secondes !

![Click Frenzy](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite)

## 🧪 Projet de test - Claude Code v2.0.0

Ce projet a été créé comme test pour **Claude Code v2.0.0** avec le modèle **Claude Sonnet 4.5**.

### 📊 Retour d'expérience

**Objectif du test :** Comparer les performances et la compréhension entre les versions précédentes et la v2.0.0.

**Observations :**
- ⚠️ **Compréhension du langage naturel** : La version actuelle semble avoir plus de difficulté à comprendre les instructions en langage naturel mal écrit ou mal structuré par rapport aux versions précédentes
- ⚠️ **Vitesse de réponse** : Impression que la version précédente était plus réactive et fluide
- ✅ **Qualité du code** : Le code généré reste de bonne qualité et fonctionnel
- ✅ **Fonctionnalités complètes** : Toutes les fonctionnalités demandées ont été implémentées correctement

**Conclusion :** Bien que Claude Code v2.0.0 produise un code de qualité, il semble y avoir une régression au niveau de la compréhension du langage naturel informel et de la réactivité par rapport aux versions antérieures.

## 🎮 Fonctionnalités

### 🎯 Gameplay
- **30 secondes de jeu intense** - Cliquez sur les cibles qui apparaissent aléatoirement
- **Système de combo** - Enchaînez les clics pour augmenter votre multiplicateur (jusqu'à x5)
- **Difficulté progressive** - Les cibles rétrécissent au fur et à mesure que votre combo augmente
- **Compteur de série** - Suivez votre série de clics en temps réel

### 🎨 Effets visuels
- **Particules colorées** - 8 particules animées à chaque clic
- **Animations fluides** - Transitions et effets visuels pour un gameplay immersif
- **Feedback visuel** - Timer qui pulse et change de couleur en fin de partie
- **Design moderne** - Interface avec effets de glassmorphism et dégradés

### 🔊 Effets sonores
- **Sons dynamiques** - Fréquences qui augmentent avec le multiplicateur
- **Sons de combo** - Effets spéciaux quand vous atteignez un combo x5
- **Mélodie de victoire** - Séquence musicale pour un nouveau record
- **Son de game over** - Effet sonore de fin de partie

### 📱 Mobile-friendly
- **Responsive design** - S'adapte à toutes les tailles d'écran
- **Touch optimisé** - Interface tactile fluide
- **Vibrations** - Retour haptique sur mobile (30ms par clic, triple vibration sur combo)
- **Performance optimisée** - 60 FPS même sur appareils mobiles

### 💾 Persistence
- **Sauvegarde automatique** - Votre meilleur score est conservé dans le localStorage
- **Statistiques** - Affichage du score et de la meilleure série à la fin de chaque partie

## 🚀 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

## 🛠️ Développement

### Lancer le serveur de développement
```bash
npm run dev
```
Le jeu sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualiser le build
```bash
npm run preview
```

## 📁 Structure du projet

```
click-frenzy/
├── src/
│   ├── components/           # Composants React
│   │   ├── ClickEffect.jsx   # Effet visuel des points
│   │   ├── ComboIndicator.jsx # Indicateur de combo
│   │   ├── GameOverScreen.jsx # Écran de fin
│   │   ├── Header.jsx        # En-tête avec scores
│   │   ├── Instructions.jsx  # Instructions du jeu
│   │   ├── Particle.jsx      # Système de particules
│   │   ├── StartScreen.jsx   # Écran de démarrage
│   │   └── Target.jsx        # Cible cliquable
│   ├── hooks/
│   │   └── useGameLogic.js   # Logique du jeu
│   ├── utils/
│   │   └── sounds.js         # Générateur de sons (Web Audio API)
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles CSS
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Comment jouer

1. **Cliquez sur "Commencer"** pour lancer une partie
2. **Cliquez sur les cibles rouges** qui apparaissent à l'écran
3. **Enchaînez les clics** pour augmenter votre combo et votre multiplicateur
4. **Attention !** Les cibles deviennent plus petites avec votre combo
5. **Maximisez votre score** en 30 secondes !

### 🏆 Système de scoring
- **Points de base** : 10 points par cible
- **Multiplicateur** : +0.5x tous les 5 clics en combo (max x5)
- **Exemple** : Avec un combo de 10, vous gagnez 10 × 2.5 = 25 points par clic

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque UI
- **Vite 7** - Build tool ultra-rapide
- **Lucide React** - Icônes modernes
- **Web Audio API** - Génération de sons en temps réel
- **CSS3** - Animations et effets visuels
- **LocalStorage API** - Sauvegarde des scores

## 📊 Optimisations

- **Bundle size** : 202.33 kB JS (63.47 kB gzippé)
- **CSS** : 3.92 kB (1.42 kB gzippé)
- **Lazy loading** : Chargement optimisé des composants
- **Memoization** : Performance optimisée avec React hooks

## 🌐 Déploiement

### Netlify
1. Build : `npm run build`
2. Glissez-déposez le dossier `dist/` sur [netlify.app](https://app.netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Publiez le contenu du dossier dist/ sur la branche gh-pages
```

## 📝 License

MIT

## 👨‍💻 Auteur

Créé avec ❤️ et Claude Code

---

**Amusez-vous bien et battez votre record ! 🎯🔥**