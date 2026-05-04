import mammoth from 'mammoth'
import multer from 'multer'

import { PDFParse } from 'pdf-parse'

const storageFalse = multer.memoryStorage()

const storageTrue = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, file.originalname)
}) /* à utiliser plus tard pour laisser une option de sauvegarde de CV */

const fileFilter = (
  _,
  file,
  callback,
) => {
  if (!file.originalname.match(/\.(pdf|docx|txt)$/))
    return callback(
      new Error('Only pdf, docx and txt files are allowed'),
      false,
    );
  callback(null, true);
};

export const configurationStorage = () => multer({ storage: storageFalse, fileFilter: fileFilter });

/* Extraction */

export async function extractText(file) {
  const extension = file.originalname.split('.').pop().toLowerCase()

  if (extension === 'pdf') {
    const parser = new PDFParse({ data: file.buffer })
    const result = await parser.getText()
    await parser.destroy()
    return result.text
  }

  if (extension === 'docx') {
    const data = await mammoth.extractRawText({ buffer: file.buffer })
    return data.value
  }

  if (extension === 'txt') {
    return file.buffer.toString('utf-8')
  }
}

export async function analyserCV(text, offre) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      prompt: `Tu es un expert en recrutement et optimisation de CV. Tu dois analyser le CV d'un candidat et le comparer à une offre d'emploi spécifique.

RÈGLES IMPORTANTES :
- Analyse UNIQUEMENT le contenu du CV fourni, pas l'offre
- Les points_positifs = compétences du CV qui correspondent à l'offre
- Les points_negatifs = compétences demandées dans l'offre qui sont absentes ou faibles dans le CV
- Les mots_cles_manquants = mots-clés présents dans l'offre mais absents du CV
- Les suggestions = actions concrètes que le candidat peut faire pour améliorer son CV
- Le score_ats = pourcentage de correspondance entre le CV et l'offre (0 à 100)
- Réponds UNIQUEMENT avec le JSON, sans texte avant ou après, sans markdown

Format de réponse obligatoire :
{"score_ats": <nombre>,"points_positifs": ["<point>"],"points_negatifs": ["<point>"],"mots_cles_manquants": ["<mot>"],"suggestions": ["<suggestion>"]}

CV DU CANDIDAT :
${text}

OFFRE D'EMPLOI :
${offre}

JSON :`,
      stream: false,
      options: {
        num_predict: 1024,
        temperature: 0.3
      }
    })
  })

  const data = await response.json()
  const raw = data.response.replace(/```json\n?/g, '').replace(/```/g, '').trim()
  try {
    return JSON.parse(raw)
  } catch (e) {
    console.error('Réponse brute du modèle :', raw)
    throw new Error('Le modèle a retourné un JSON invalide')
  }
}