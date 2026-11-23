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

## Images et contacts

Les visuels et l’emblème sont servis localement depuis `public/assets`. Les crédits de la photographie de Niamey et la provenance des illustrations figurent dans `public/credits-images.md`. Les coordonnées de SIS et les catégories de biens sont définies dans `src/content.js`.

## Déploiement
Le frontend peut être déployé sur Vercel avec `npm run build` et le dossier de sortie `dist`. L'API Express doit être déployée séparément sur un hébergeur Node.js ou adaptée aux fonctions serverless. Ne placez aucune clé secrète dans le code source.


## Pages publiques

La construction génère un fichier HTML pour chaque adresse publique, avec ses métadonnées de partage. Le formulaire de contact prépare un message WhatsApp à relire avant envoi. Les offres, les prix et les disponibilités se confirment auprès de SIS.

## Fonctionnalités à finaliser avant une gestion complète

L'espace d'administration sécurisé (authentification, rôles, stockage des photos et gestion persistante des annonces) n'est pas activé dans cette version. Il doit être relié à une base de données et à un système d'authentification sécurisé avant de recevoir des identifiants ou des données de clients. Les annonces réelles doivent être ajoutées uniquement après validation par SIS.
