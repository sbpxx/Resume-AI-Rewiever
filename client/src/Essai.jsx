import "./Essai.css"

export function Essai() {
  return (
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

          <div className="upload-zone">
            <input type="file" accept=".pdf,.doc,.docx,.txt" />
            <div className="upload-icon">📄</div>
            <h3>Déposez votre CV ici</h3>
            <p>PDF, DOCX ou TXT · Max 5 MB</p>
            <span className="btn-upload">Analyser gratuitement</span>
          </div>

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
  )
}