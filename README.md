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


## Améliorations visuelles et transparence

- Les visuels du centre-ville de Niamey et du Pont Kennedy sont des photographies documentées de Wikimedia Commons, utilisées avec attribution.
- Les visuels immobiliers génériques restent des illustrations : ils ne représentent pas des biens SIS et ne doivent pas être interprétés comme des annonces disponibles.
- Avant publication d'une annonce, renseigner les photos réelles autorisées, la localisation, la superficie, le prix, le statut de disponibilité et les justificatifs vérifiés.
- La page « Nos biens » rappelle les vérifications documentaires et foncières à effectuer avant tout paiement.
- Les métadonnées Open Graph, le titre, la description, la balise canonique et les données structurées locales ont été renforcés.

## Fonctionnalités à finaliser avant une gestion complète

L'espace d'administration sécurisé (authentification, rôles, stockage des photos et gestion persistante des annonces) n'est pas activé dans cette version. Il doit être relié à une base de données et à un système d'authentification sécurisé avant de recevoir des identifiants ou des données de clients. Les annonces réelles doivent être ajoutées uniquement après validation par SIS.
