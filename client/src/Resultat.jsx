import "./Resultat.css"

function toArray(val) {
  if (Array.isArray(val)) return val
  if (typeof val === 'string') return val.split('\n').filter(Boolean)
  return []
}

export function Resultat({ data }) {
  const positifs = toArray(data.points_positifs)
  const negatifs = toArray(data.points_negatifs)
  const motsCles = toArray(data.mots_cles_manquants)
  const suggestions = toArray(data.suggestions)

  return (
    <div className="resultat-wrapper">
      <div className="resultat-inner">

        <div className="resultat-score-section">
          <p className="resultat-label">Résultat de l'analyse</p>
          <h2 className="resultat-title">Votre score <em>ATS</em></h2>
          <div className="score-circle">
            <span className="score-value">{data.score_ats}</span>
            <span className="score-max">/100</span>
          </div>
        </div>

        <div className="resultat-grid">

          <div className="resultat-card positive">
            <h3 className="resultat-card-title">✦ Points positifs</h3>
            <ul>
              {positifs.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="resultat-card negative">
            <h3 className="resultat-card-title">✦ Points négatifs</h3>
            <ul>
              {negatifs.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="resultat-card keywords">
            <h3 className="resultat-card-title">✦ Mots-clés manquants</h3>
            <div className="keywords-list">
              {motsCles.map((mot, i) => (
                <span key={i} className="keyword-tag">{mot}</span>
              ))}
            </div>
          </div>

          <div className="resultat-card suggestions">
            <h3 className="resultat-card-title">✦ Suggestions</h3>
            <ol>
              {suggestions.map((suggestion, i) => (
                <li key={i}>{suggestion}</li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </div>
  )
}
