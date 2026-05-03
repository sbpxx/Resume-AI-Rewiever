import "./Solution.css"
import { SolutionStep } from "./SolutionStep"

const steps = [
  {
    num: "1",
    title: "Déposez votre CV",
    text: "Importez votre fichier PDF ou Word en quelques secondes. Pas d'inscription nécessaire pour commencer.",
    tag: "⚡ Formats acceptés : PDF, DOCX, TXT",
  },
  {
    num: "2",
    title: "L'IA analyse votre profil",
    text: "Notre algorithme évalue votre CV selon les critères des ATS, la clarté de votre expérience, les mots-clés manquants et l'impact de vos formulations.",
    tag: "🔍 Plus de 40 critères analysés automatiquement",
  },
  {
    num: "3",
    title: "Recevez votre rapport personnalisé",
    text: "Un score global, des suggestions concrètes pour chaque section, et des exemples de reformulations directement applicables.",
    tag: "✦ Rapport disponible en moins de 30 secondes",
  },
]

export function Solution() {
  return (
    <section id="solution">
      <div className="solution-head">
        <h3 className="head-title">La solution</h3>
        <p className="cool-line">
          Une analyse claire,<br />
          <em>en quelques secondes.</em>
        </p>
        <p className="explanation-line">
          Notre IA passe votre CV au crible et vous donne un plan d'action précis, <br />
          comme si un expert RH vous accompagnait en temps réel.
        </p>
        <div className="solution-step">
          {steps.map((step, index) => (
            <SolutionStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
