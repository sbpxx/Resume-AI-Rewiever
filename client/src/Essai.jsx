import "./Essai.css"
import { useRef, useState } from 'react'
import { Resultat } from './Resultat'

export function Essai() {
  const [cvLoaded, setCvLoaded] = useState(false)
  const [cvFile, setCvFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const fileInputRef = useRef(null)
  const offreRef = useRef(null)

  const cvLoad = () => {
    const file = fileInputRef.current.files[0]
    if (!file) return
    setCvFile(file)
    setCvLoaded(true)
  }

  const uploadCv = async () => {
    if (!cvFile) return

    setLoading(true)
    setResult(null)

    const formData = new FormData()
    formData.append('cv', cvFile)
    formData.append('offre', offreRef.current.value)

    const response = await fetch('http://localhost:3000/analyse', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <>
      <div className="full-section">
        <div className="section-inner centered">
          <section id="essai">
            <p className="section-label">Essai gratuit</p>
            <h2 className="section-title">
              Voyez par vous-même,<br /><em>sans engagement.</em>
            </h2>
            <p className="section-intro">
              Obtenez un aperçu de votre score ATS et les 3 points les plus urgents à corriger — gratuitement, en 30 secondes.
            </p>

            {!cvLoaded ? (
              <div className="upload-zone">
                <input type="file" accept=".pdf,.doc,.docx,.txt" ref={fileInputRef} onChange={cvLoad} />
                <div className="upload-icon">📄</div>
                <h3>Déposez votre CV ici</h3>
                <p>PDF, DOCX ou TXT · Max 5 MB</p>
              </div>
            ) : (
              <>
                <div className="upload-result">
                  <div className="upload-result-left">
                    <span className="upload-result-icon">📄</span>
                    <p className="upload-result-filename">{cvFile.name}</p>
                    <p className="upload-result-status">Fichier chargé</p>
                    <button className="btn-modifier" onClick={() => { setCvLoaded(false); setCvFile(null) }}>Modifier</button>
                  </div>
                  <div className="upload-result-right">
                    <textarea
                      className="offre-textarea"
                      placeholder="Collez ici l'énoncé de l'offre d'emploi..."
                      ref={offreRef}
                    />
                  </div>
                </div>
                <button className="btn-analyse" onClick={uploadCv}>Lancer l'analyse</button>
              </>
            )}

            {loading && (
              <div className="loading-bar-wrapper">
                <p className="loading-text">Analyse en cours...</p>
                <div className="loading-bar">
                  <div className="loading-bar-fill"></div>
                </div>
              </div>
            )}

            <p className="essai-note">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="#8fa0b8" />
                <path d="M7 4v4M7 10v.5" stroke="#8fa0b8" strokeLinecap="round" />
              </svg>
              Aucune carte bancaire requise · Vos données ne sont pas conservées
            </p>
          </section>
        </div>
      </div>

      {result && <Resultat data={result} />}
    </>
  )
}
