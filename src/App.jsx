import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Expand, HardHat, Layers, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { asset, categories, email, missing, models, origin, pages, phones, services, whatsapp } from './content.js'

function Brand() {
  return <Link className="brand" to="/" aria-label="SIS Immobilier, accueil">
    <img src={asset('embleme')} alt="" width="65" height="36"/>
    <span><strong>SIS</strong><small>Société Immobilière Sahélienne</small></span>
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  const close = () => setOpen(false)
  return <header className="header" onKeyDown={e => {
    if (e.key === 'Escape' && open) { close(); toggle.current?.focus() }
  }}>
    <div className="wrap header-inner">
      <div onClick={close}><Brand/></div>
      <button ref={toggle} type="button" className="menu-toggle" aria-controls="navigation" aria-expanded={open}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav id="navigation" aria-label="Navigation principale" className={open ? 'nav open' : 'nav'}>
        {pages.map(p => <NavLink key={p.path} to={p.path} end onClick={close} className={({isActive}) =>
          [p.path === '/contact' ? 'nav-contact' : '', isActive ? 'active' : ''].join(' ')}>
          {p.path === '/contact' ? <>Contacter SIS <ArrowUpRight size={16}/></> : p.label}
        </NavLink>)}
      </nav>
    </div>
  </header>
}

function Action({to, children, secondary = false}) {
  return <Link to={to} className={'action' + (secondary ? ' secondary' : '')}>{children}<ArrowUpRight size={17}/></Link>
}
function TextLink({to, children}) { return <Link className="text-link" to={to}>{children}<ArrowRight size={17}/></Link> }
function WhatsAppLink({children, className, label}) {
  const url = whatsapp.href + '?text=' + encodeURIComponent('Bonjour SIS, je souhaite obtenir des renseignements sur un projet immobilier.')
  return <a href={url} className={className} aria-label={label} target="_blank" rel="noopener noreferrer">{children}</a>
}

function Footer() {
  return <footer className="footer"><div className="wrap">
    <div className="footer-grid"><div><Brand/><p>Terrain, logement et construction<br/>à Niamey et au Niger.</p></div>
      <div><h2>Navigation</h2>{pages.slice(1).map(p => <Link key={p.path} to={p.path}>{p.label}</Link>)}</div>
      <div><h2>Joindre SIS</h2>{phones.map(p => <a key={p.href} href={p.href}>{p.label}</a>)}
        <a href={whatsapp.href}>WhatsApp · {whatsapp.label}</a><a href={'mailto:'+email}>{email}</a>
      </div>
    </div><div className="footer-base"><span>© {new Date().getFullYear()} Société Immobilière Sahélienne</span><span>Niamey, Niger</span></div>
  </div></footer>
}

function PageHeading({label, title, accent, text}) {
  return <div className="wrap page-heading"><span className="eyebrow">{label}</span>
    <h1>{title} <em>{accent}</em></h1><p>{text}</p></div>
}
function Photo({name, alt, eager = false, ...props}) {
  return <img src={asset(name)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" {...props}/>
}
function Callout() {
  return <aside className="callout"><div className="wrap callout-inner"><div><span className="eyebrow">Échanger avec SIS</span><h2>Parlons de votre <em>projet.</em></h2></div>
    <Action to="/contact">Prendre contact</Action></div></aside>
}

function Home() {
  const shortcuts = [
    [Layers, 'Trouver un terrain', '/biens', 'Parcelles et terrains'],
    [HardHat, 'Faire construire', '/services#construction', 'Logements et aménagement'],
    [MessageCircle, 'Demander conseil', '/contact', 'Échanger avec notre équipe']
  ]
  return <>
    <section className="home-hero wrap">
      <div className="hero-copy"><span className="eyebrow with-line"><MapPin size={14}/> Niamey, Niger</span>
        <h1>Du terrain <br/>à <em>la maison.</em></h1>
        <p>La Société Immobilière Sahélienne vous accompagne pour choisir une parcelle, construire ou trouver un logement au Niger.</p>
        <div className="actions"><Action to="/services">Nos services</Action><TextLink to="/biens">Explorer nos biens</TextLink></div>
      </div>
      <figure className="hero-photo"><Photo name="chantier" alt={services[1].alt} eager width="766" height="510"/>
        <figcaption><span className="caption-mark"></span>Gros œuvre <span className="caption-divider">/</span> Illustration</figcaption>
      </figure>
    </section>
    <div className="quick-band"><div className="wrap quick-grid">{shortcuts.map(([Icon, title, to, note]) =>
      <Link key={title} to={to}><Icon className="quick-icon" size={24}/><span><b>{title}</b><small>{note}</small></span><ArrowUpRight size={17}/></Link>)}</div></div>
    <section className="section wrap"><div className="section-head"><div><span className="eyebrow">Nos biens</span><h2>Quel espace <em>recherchez-vous ?</em></h2></div><TextLink to="/biens">Découvrir les modèles</TextLink></div>
      <CategoryGrid compact/>
    </section>
    <section className="soft-section"><div className="wrap story"><figure><Photo name="niamey" alt="Le centre-ville de Niamey vu depuis le fleuve Niger"/><figcaption>Niamey depuis le fleuve Niger · <a href="/credits-images.md">Crédit photo</a></figcaption></figure>
      <div><span className="eyebrow">La Société Immobilière Sahélienne</span><h2>Un projet ancré <em>à Niamey.</em></h2><p>Le choix d’une parcelle ou d’un logement commence par des questions concrètes. Notre équipe vous aide à préciser vos besoins, à comprendre les options et à préparer les prochaines étapes.</p><TextLink to="/a-propos">Découvrir SIS</TextLink></div>
    </div></section><Callout/>
  </>
}
function CategoryGrid({compact = false}) {
  return <div className="category-grid">{categories.map(c =>
    <Link to={compact ? '/biens#categories' : '/contact?objet='+encodeURIComponent(c.title)} key={c.title} className="category">
      <Photo name={c.image} alt={c.alt} width="600" height="390"/><div><h3>{c.title}</h3><ArrowUpRight size={20}/></div><p>{c.text}</p>
    </Link>)}</div>
}

function About() {
  return <><PageHeading label="À propos de SIS" title="Un partenaire" accent="de proximité." text="Basée à Niamey, la Société Immobilière Sahélienne accompagne les ménages dans l’accès au terrain et au logement."/>
    <section className="soft-section"><div className="wrap story"><figure><Photo name="etude" alt={services[2].alt} eager/><figcaption>Étude de plans sur un chantier · Illustration</figcaption></figure>
      <div><span className="eyebrow">Notre mission</span><h2>Un parcours adapté <em>à chaque ménage.</em></h2><p>Une famille qui prépare sa première construction et un propriétaire qui souhaite vendre ont des besoins différents. Nous partons de votre situation, de vos moyens et de vos priorités pour orienter l’échange.</p></div>
    </div></section><section className="section wrap"><span className="eyebrow">Notre approche</span><h2>Comment se déroule <em>l’accompagnement ?</em></h2>
      <div className="principles">{[
        ['Écouter', 'Nous faisons le point avec vous sur le lieu recherché, le budget et l’usage prévu.'],
        ['Conseiller', 'Nous vous aidons à comparer les options et à identifier les informations à vérifier.'],
        ['Accompagner', 'Nous reprenons avec vous les questions en suspens pour préparer la visite ou la prochaine étape.']
      ].map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section><Callout/></>
}

function Services() {
  return <><PageHeading label="Nos services" title="Acheter, bâtir," accent="aménager." text="Chaque projet commence à une étape différente. Choisissez le service qui correspond à votre besoin."/>
    <section className="wrap service-list" aria-label="Prestations immobilières">{services.map(s =>
      <article key={s.id} id={s.id} className="service"><Photo name={s.image} alt={s.alt} eager={s.id==='achat-vente'}/>
        <div><h2>{s.name}</h2><p>{s.text}</p><TextLink to={'/contact?objet='+encodeURIComponent(s.name)}>Parler de ce service</TextLink></div>
      </article>)}</section><Callout/></>
}

function Gallery() {
  const [current,setCurrent] = useState(0)
  const dialog = useRef(null)
  const move = delta => setCurrent(i => (i + delta + models.length) % models.length)
  function show(i) { setCurrent(i); dialog.current.showModal() }
  return <section className="soft-section"><div className="wrap gallery-section"><span className="eyebrow">Galerie résidentielle</span><h2>Les modèles <em>en images.</em></h2>
    <p>Façades, plans d’ensemble et implantation des maisons. Sélectionnez une vue pour l’agrandir.</p>
    <div className="gallery">{models.map(([id,label],i) => <button type="button" key={id} onClick={()=>show(i)} aria-label={'Agrandir la vue '+(i+1)+' — '+label}>
      <Photo name={'residence-'+id} alt={label}/><span>{label}<Expand size={15}/></span></button>)}</div>
    <dialog ref={dialog} className="viewer" aria-label="Galerie de modèles" onClick={e=>{if(e.target===dialog.current) dialog.current.close()}}
      onKeyDown={e=>{if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)}}>
      <div><button className="viewer-close" aria-label="Fermer la vue" onClick={()=>dialog.current.close()}><X/></button>
        <img src={asset('residence-'+models[current][0])} alt={models[current][1]} loading="lazy"/>
        <div className="viewer-bar"><button onClick={()=>move(-1)} aria-label="Vue précédente"><ChevronLeft/></button>
          <span aria-live="polite">{current+1} / {models.length} · {models[current][1]}</span><button onClick={()=>move(1)} aria-label="Vue suivante"><ChevronRight/></button></div>
      </div>
    </dialog>
  </div></section>
}
function Properties() {
  return <><PageHeading label="Nos biens" title="Terrains, maisons" accent="et logements." text="Découvrez les catégories de biens et les modèles présentés par SIS. Pour une disponibilité, un prix ou une superficie, contactez directement notre équipe."/>
    <section id="categories" className="wrap category-section" aria-label="Catégories de biens"><CategoryGrid/><p className="photo-note">Les visuels illustrent les catégories et les modèles. Les offres disponibles sont confirmées par SIS.</p></section>
    <Gallery/><section className="wrap section"><span className="eyebrow">Préparer une visite</span><h2>Avant de <em>vous engager.</em></h2><div className="principles">
      <article><h3>Les documents</h3><p>Demandez les pièces de propriété ou d’attribution et faites-les examiner avant tout paiement.</p></article>
      <article><h3>La parcelle</h3><p>Sur place, comparez les limites, la superficie et l’accès avec les documents présentés.</p></article>
      <article><h3>Les conditions</h3><p>Faites préciser le prix, les coordonnées des parties et les modalités de paiement par écrit.</p></article>
    </div></section><Callout/></>
}

const subjects = ['Demande d’informations', ...services.map(s=>s.name), ...categories.map(c=>c.title), 'Autre demande']
function ContactForm() {
  const {search} = useLocation()
  const [subject, setSubject] = useState(subjects[0])
  useEffect(() => {
    const requested = new URLSearchParams(search).get('objet')
    setSubject(subjects.includes(requested) ? requested : subjects[0])
  }, [search])
  function prepare(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = ['Bonjour SIS,','Objet : '+subject, String(data.get('message')).trim(),
      'Nom : '+String(data.get('name')).trim(), 'Téléphone : '+String(data.get('phone')).trim()].join('\n')
    window.open(whatsapp.href+'?text='+encodeURIComponent(message), '_blank', 'noopener,noreferrer')
  }
  return <form className="contact-form" onSubmit={prepare}>
    <h2>Décrire votre projet</h2>
    <div className="form-pair"><label>Nom complet<input name="name" autoComplete="name" required/></label>
      <label>Téléphone<input name="phone" autoComplete="tel" type="tel" required/></label></div>
    <label>Objet<select name="subject" value={subject} onChange={e=>setSubject(e.target.value)}>{subjects.map(s=><option key={s}>{s}</option>)}</select></label>
    <label>Votre message<textarea name="message" rows="4" placeholder="Quartier, type de bien, budget envisagé…" required/></label>
    <button className="action" type="submit"><MessageCircle size={18}/> Préparer le message WhatsApp</button>
    <small>Vous pourrez relire et envoyer votre message dans WhatsApp.</small>
  </form>
}
function Contact() {
  return <><PageHeading label="Contact" title="Parlons de" accent="votre projet." text="Pour une visite, un renseignement ou une demande de devis, contactez l’équipe SIS à Niamey."/>
    <section className="wrap contact-layout" aria-label="Coordonnées et formulaire">
      <div className="contact-details">
        <div><Phone/><div><h2>Téléphones</h2>{phones.map(p=><a key={p.href} href={p.href}>{p.label}</a>)}</div></div>
        <div><MessageCircle/><div><h2>WhatsApp devis</h2><WhatsAppLink>{whatsapp.label} <ArrowUpRight size={16}/></WhatsAppLink></div></div>
        <div><Mail/><div><h2>E-mail</h2><a href={'mailto:'+email}>{email}</a></div></div>
        <div><MapPin/><div><h2>Localisation</h2><p>Niamey, Niger</p></div></div>
      </div><ContactForm/>
    </section></>
}
function NotFound() {
  return <div className="wrap not-found"><h1>Page <em>introuvable.</em></h1><Action to="/">Revenir à l’accueil</Action></div>
}
function RouteEffects() {
  const {pathname,hash} = useLocation()
  const previous = useRef(pathname)
  useEffect(()=>{
    const current = pages.find(p=>p.path === (pathname.replace(/\/$/,'') || '/')) || missing
    document.title = current.title
    for (const [selector,attribute,value] of [
      ['meta[name="description"]','content',current.description],
      ['meta[property="og:title"]','content',current.title],
      ['meta[property="og:description"]','content',current.description],
      ['meta[property="og:url"]','content',origin+pathname],
      ['link[rel="canonical"]','href',origin+pathname]
    ]) document.querySelector(selector)?.setAttribute(attribute,value)
    if(hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else if(previous.current !== pathname) {
      window.scrollTo(0,0)
      document.getElementById('contenu')?.focus({preventScroll:true})
    }
    previous.current = pathname
  },[pathname,hash])
  return null
}
export default function App() {
  return <><RouteEffects/><a className="skip" href="#contenu">Aller au contenu</a><Header/>
    <main id="contenu" tabIndex="-1"><Routes>
      <Route path="/" element={<Home/>}/><Route path="/a-propos" element={<About/>}/>
      <Route path="/services" element={<Services/>}/><Route path="/biens" element={<Properties/>}/>
      <Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
    </Routes></main><Footer/><WhatsAppLink className="floating" label="Contacter SIS sur WhatsApp"><MessageCircle size={24}/></WhatsAppLink></>
}
