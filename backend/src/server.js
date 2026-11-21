import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(express.json())
app.get('/api/health', (_req,res)=>res.json({status:'ok',service:'SIS Immobilier API'}))
app.get('/api/properties', (_req,res)=>res.json({items:[],message:'Les annonces seront ajoutées après validation des biens SIS.'}))
app.post('/api/contact', (req,res)=>{
  const {name,phone,message}=req.body || {}
  if(!name || !phone || !message) return res.status(400).json({error:'Nom, téléphone et message sont obligatoires.'})
  return res.status(202).json({received:true,message:'Demande reçue. Configurez un service de messagerie avant la mise en production.'})
})
app.listen(PORT,()=>console.log('SIS API listening on port '+PORT))
