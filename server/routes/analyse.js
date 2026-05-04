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
      prompt: `Tu es un expert RH. Analyse ce CV par rapport à l'offre d'emploi et retourne uniquement un JSON avec cette structure exacte :
{
  "score_ats": 0-100,
  "points_positifs": ["..."],
  "points_negatifs": ["..."],
  "mots_cles_manquants": ["..."],
  "suggestions": ["..."]
}

CV :
${text}

Offre d'emploi :
${offre}`,
      stream: false
    })
  })

  const data = await response.json()
  const raw = data.response.replace(/```json\n?/g, '').replace(/```/g, '').trim()
  return JSON.parse(raw)
}