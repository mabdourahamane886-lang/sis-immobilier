export const origin = 'https://sis-immobilier.vercel.app'
export const email = 'societeimmobilieresahelienne@gmail.com'
export const phones = [
  { label: '+227 92 04 04 10', href: 'tel:+22792040410' },
  { label: '+227 91 26 26 38', href: 'tel:+22791262638' }
]
export const whatsapp = { label: '+227 92 04 04 25', href: 'https://wa.me/22792040425' }
export const pages = [
  { path: '/', label: 'Accueil', title: 'SIS Immobilier | Société Immobilière Sahélienne à Niamey', description: 'Terrains, maisons et logements au Niger. La Société Immobilière Sahélienne vous accompagne dans l’achat, la construction et l’aménagement à Niamey.' },
  { path: '/a-propos', label: 'À propos', title: 'À propos de SIS | Société Immobilière Sahélienne', description: 'Découvrez la mission de SIS à Niamey et son accompagnement des ménages dans leur projet immobilier.' },
  { path: '/services', label: 'Services', title: 'Nos services immobiliers | SIS Immobilier', description: 'Achat et vente, réalisation de logements sociaux, conseil immobilier et aménagement de parcelles au Niger.' },
  { path: '/biens', label: 'Nos biens', title: 'Terrains et modèles de logements | SIS Immobilier', description: 'Explorez les catégories de biens et les modèles de maisons présentés par SIS. Contactez l’équipe pour vérifier les disponibilités.' },
  { path: '/contact', label: 'Contact', title: 'Contacter SIS à Niamey | SIS Immobilier', description: 'Appelez SIS à Niamey ou préparez une demande de devis sur WhatsApp pour votre projet de terrain, de logement ou de construction.' }
]
export const missing = { title: 'Page introuvable | SIS Immobilier', description: 'Retrouvez les services, les modèles de logements et les coordonnées de SIS.' }

export const services = [
  { id: 'achat-vente', name: 'Achat et vente', image: 'parcelle', alt: 'Terrain dégagé en bordure de Niamey', text: 'Vous cherchez une parcelle ou souhaitez vendre un logement ? Échangez avec SIS sur le quartier, la superficie et les pièces du dossier.' },
  { id: 'construction', name: 'Construction de logements', image: 'chantier', alt: 'Illustration de la maçonnerie d’une maison en construction', text: 'Du logement social à la maison familiale, précisez le nombre de pièces, votre budget et les étapes de construction à prévoir.' },
  { id: 'conseil', name: 'Conseil immobilier', image: 'etude', alt: 'Illustration de deux professionnels étudiant un plan sur un chantier', text: 'Faites le point sur vos priorités et les informations à réunir avant une visite, un achat ou le lancement de votre projet.' },
  { id: 'amenagement', name: 'Aménagement de parcelles', image: 'amenagement', alt: 'Illustration d’une voie aménagée entre des parcelles', text: 'Étudiez les accès, la voirie, les réseaux et l’assainissement à prévoir pour préparer un terrain à la construction.' }
]

export const categories = [
  { title: 'Terrains et parcelles', image: 'parcelle', alt: 'Étendue de terre au coucher du soleil', text: 'Choisir un emplacement et vérifier ses limites.' },
  { title: 'Maisons et villas', image: 'maison', alt: 'Illustration d’une maison de plain-pied avec une terrasse ombragée', text: 'Définir les espaces et le confort de votre foyer.' },
  { title: 'Logements familiaux', image: 'residence-05', alt: 'Vue architecturale de plusieurs logements de plain-pied', text: 'Comparer les configurations pour votre famille.' }
]
export const models = [
  ['01', 'Maison avec porche'], ['02', 'Vue d’ensemble du programme'],
  ['03', 'Entrée et stationnement'], ['04', 'Alignement des maisons'],
  ['05', 'Rue résidentielle'], ['06', 'Maison avec terrasse'],
  ['07', 'Implantation sur la parcelle'], ['08', 'Organisation des îlots'],
  ['09', 'Façade sur rue'], ['10', 'Détail de la façade']
]
export function asset(name) { return '/assets/' + name + '.webp' }
