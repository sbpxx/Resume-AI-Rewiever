import "./Tarifs.css"
import { TarifOption } from "./TarifOption"

const plans = [
  {
    name: "Découverte",
    price: "Gratuit",
    currency: null,
    period: null,
    description: "Pour tester et comprendre vos lacunes principales.",
    features: [
      { text: "Score ATS global" },
      { text: "3 points critiques à corriger" },
      { text: "Analyse de la mise en forme" },
      { text: "Rapport complet détaillé", off: true },
      { text: "Reformulations suggérées", off: true },
      { text: "Comparaison par secteur", off: true },
    ],
    ctaText: "Commencer gratuitement",
    ctaStyle: "outline",
    featured: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "9",
    currency: "€",
    period: "/ analyse",
    description: "Pour les candidats sérieux qui veulent décrocher des entretiens rapidement.",
    features: [
      { text: "Score ATS global" },
      { text: "Rapport complet (40+ critères)" },
      { text: "Reformulations section par section" },
      { text: "Mots-clés manquants par secteur" },
      { text: "Comparaison à votre secteur cible" },
      { text: "Analyses illimitées", off: true },
    ],
    ctaText: "Obtenir mon rapport",
    ctaStyle: "filled",
    featured: true,
    badge: "Le plus populaire",
  },
  {
    name: "Premium",
    price: "19",
    currency: "€",
    period: "/ mois",
    description: "Pour les chercheurs d'emploi actifs qui postulent régulièrement.",
    features: [
      { text: "Analyses illimitées" },
      { text: "Rapport complet (40+ critères)" },
      { text: "Reformulations section par section" },
      { text: "Mots-clés manquants par secteur" },
      { text: "Comparaison à votre secteur cible" },
      { text: "Suivi de progression dans le temps" },
    ],
    ctaText: "Commencer l'essai",
    ctaStyle: "outline",
    featured: false,
    badge: null,
  },
]

export function Tarifs() {
  return (
    <div className="full-section">
      <div className="section-inner centered" id="tarifs">
        <p className="section-label">Tarifs</p>
        <h2 className="section-title">Choisissez votre<br /><em>niveau d'ambition.</em></h2>
        <p className="section-intro">Commencez gratuitement, évoluez quand vous le souhaitez. Pas d'abonnement forcé.</p>

        <div className="tarifs-grid">
          {plans.map((plan, index) => (
            <TarifOption key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}