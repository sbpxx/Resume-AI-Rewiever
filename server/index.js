import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './db/db.js'
import { configurationStorage, extractText } from './routes/analyse.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Test connexion
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('DB connection error:', err.message)
  else console.log('DB connected:', res.rows[0].now)
})

app.get('/', (req, res) => {
  res.json({ message: 'Resume AI Reviewer API is running' })
})

/* Post du fichier pour extraction */

const upload = configurationStorage()

app.post('/analyse', upload.single('cv'), async (req, res) => {
  const file = req.file
  const text = await extractText(req.file)
  const offre = req.body.offre
  res.json({ text, offre })
  console.log("Extraction de texte réussie")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
