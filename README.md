# SIS — Société Immobilière Sahélienne

Site vitrine professionnel en React, Vite et Node.js, avec une identité visuelle vert profond et or.

## Pages
- Accueil
- À propos
- Services
- Nos biens
- Contact

## Technologies
- React 18, Vite et React Router
- CSS responsive sans framework lourd
- Node.js et Express pour les routes API de base

## Démarrage local
Prérequis : Node.js 20 ou supérieur.

```bash
npm install
npm run dev
```

Pour démarrer l'API dans un second terminal :

```bash
cd backend
npm install
npm run dev
```

API : `http://localhost:4000/api/health`

## Images
Les photographies sont chargées depuis Unsplash via des URL distantes. Elles sont illustratives et ne représentent pas nécessairement des biens appartenant à SIS. Remplacez-les par des photos réelles et autorisées avant publication commerciale.

## Informations à compléter avant mise en ligne
- Logo officiel SIS
- Téléphone et WhatsApp officiels
- Adresse exacte et e-mail
- Présentation institutionnelle validée
- Photos réelles des terrains, logements et réalisations
- Détails vérifiés des biens : localisation, superficie, prix et disponibilité

## Déploiement
Le frontend peut être déployé sur Vercel avec `npm run build` et le dossier de sortie `dist`. L'API Express doit être déployée séparément sur un hébergeur Node.js ou adaptée aux fonctions serverless. Ne placez aucune clé secrète dans le code source.
