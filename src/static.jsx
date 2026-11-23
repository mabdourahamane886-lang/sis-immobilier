import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import App from './App.jsx'
import { asset, email, missing, origin, pages, phones } from './content.js'

export function render(path) {
  const page = pages.find(p=>p.path === path) || missing
  const schema = { '@context': 'https://schema.org', '@type': 'RealEstateAgent',
    name: 'SIS — Société Immobilière Sahélienne', url: origin+'/', email,
    telephone: phones.map(p => p.href.slice(4)), logo: origin+asset('embleme'),
    address: { '@type': 'PostalAddress', addressLocality: 'Niamey', addressCountry: 'NE' } }
  const head = renderToStaticMarkup(<>
    <title>{page.title}</title><meta name="description" content={page.description}/>
    {page===missing ? <meta name="robots" content="noindex"/> : <link rel="canonical" href={origin+path}/>}
    <meta property="og:type" content="website"/><meta property="og:locale" content="fr_NE"/>
    <meta property="og:site_name" content="SIS Immobilier"/><meta property="og:url" content={origin+path}/>
    <meta property="og:title" content={page.title}/><meta property="og:description" content={page.description}/>
    <meta property="og:image" content={origin+'/assets/partage.jpg'}/><meta property="og:image:alt" content="Maison en construction au Sahel, illustration de SIS Immobilier"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>)
  return {head, html: renderToString(<StaticRouter location={path}><App/></StaticRouter>)}
}
