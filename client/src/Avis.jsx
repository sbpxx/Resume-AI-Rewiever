import "./Avis.css"
import { AvisCard } from "./AvisCard"

const avis = [
  {
    stars: "★★★★★",
    quote: "J'avais postulé 12 fois sans réponse. Après le rapport Moon Workers, j'ai eu deux entretiens la semaine suivante. Le score ATS était révélateur.",
    avatarLetter: "L",
    name: "Léa M.",
    role: "Étudiante en master Marketing, Paris",
  },
  {
    stars: "★★★★★",
    quote: "Simple, rapide, et vraiment pertinent. Les suggestions de reformulation m'ont aidé à transformer des phrases vagues en vrais arguments.",
    avatarLetter: "T",
    name: "Thomas R.",
    role: "Jeune diplômé en Informatique, Lyon",
  },
  {
    stars: "★★★★☆",
    quote: "Je ne savais vraiment pas quoi enlever de mon CV. L'analyse m'a montré exactement ce qui surchargeait ma page et ce qui manquait.",
    avatarLetter: "S",
    name: "Sarah K.",
    role: "Licence Droit, Bordeaux",
  },
  {
    stars: "★★★★★",
    quote: "L'abonnement Premium vaut vraiment le coup quand on postule à plusieurs offres par semaine. Je retravaille mon CV pour chaque poste maintenant.",
    avatarLetter: "A",
    name: "Antoine B.",
    role: "BTS Commerce, Nantes",
  },
]

export function Avis() {
  return (
    <div className="full-section">
      <div className="section-inner centered" id="avis">
        <p className="avis-section-label">Ils ont testé</p>
        <h2 className="avis-section-title">Ce que disent nos<br /><em>premiers utilisateurs.</em></h2>

        <div className="avis-grid">
          {avis.map((item, index) => (
            <AvisCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}