# 👑 API Kingdomino

API REST développée pour alimenter le projet Kingdomino.
Elle fournit les données nécessaires au gameplay, notamment le système de tirage des dominos utilisés par le frontend React.
<br>
👉 Front : [GitHub - Kingdomino](https://github.com/AudeCharrier/react-kingdomino) <br>
👉 Démo : [Netlify - React-Kingdomino](https://react-kingdomino.netlify.app) <br>
👉 API déployée : [Render – api-kingdomino](https://api-kingdomino.onrender.com) <br>

⚠️ L’API est hébergée sur Render (offre gratuite) : le premier appel peut prendre environ 30 secondes.
<br> 

## Contexte

API développée dans le cadre d’un projet personnel full-stack autour du jeu Kingdomino Origins.
Objectif :
- séparer la logique de données du frontend, 
- simuler un vrai fonctionnement client / serveur, 
- manipuler Express et les routes API, 
- préparer une architecture évolutive. 
<br> 

## Fonctionnalités

- Exposition des données des dominos via API REST 
- Tirage aléatoire des tuiles 
- Communication avec le frontend React 
- Gestion CORS via variables d’environnement 
<br> 

## Stack technique

- Node.js 
- Express 
- dotenv 
- cors 
- nodemon 
- Déploiement sur Render
<br> 

## Route principale

GET /api/basetiles<br>
Retourne la liste des dominos utilisés par le jeu.
<br> 

## 📂 Installation
```bash
git clone https://github.com/AudeCharrier/api-kingdomino
cd api-kingdomino
npm install
```
<br> 

### Variables d’environnement
Créer un fichier .env à partir de .env.sample.<br>
Exemple :<br>
PORT=3001<br>
FRONT_URL=http://localhost:5173

### Lancement du projet
```bash
node index.js
L’API sera accessible sur :
http://localhost:3001
```
<br> 

## Architecture
Structure simple basée sur :
- routes Express, 
- données JSON, 
- communication REST avec le frontend React. 
<br> 

