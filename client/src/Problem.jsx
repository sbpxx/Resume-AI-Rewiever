import "./Problem.css"
import { ProblemCard } from "./ProblemCard"

export function Problem(){
  return(
    <section id="problem">
      <div className="problem-head">
        <h3 className="head-title">Le problème</h3>
        <p className="cool-line">
          Votre CV mérite mieux <br/>
          que le silence des recruteurs.
        </p>
        <p className="explanation-line">
          Chaque année, des milliers de candidats qualifiés sont écartés avant même qu'un humain lise leur dossier.
           La raison ? Un CV qui ne répond pas aux critères des algorithmes de tri automatique.
        </p>
        <div className="problem-card-section">
        <ProblemCard 
        emoji={"🤖"} 
        title={"Les ATS vous éliminent en silence"} 
        text={"75% des CV sont filtrés automatiquement par des logiciels avant d'atteindre un recruteur. Un mot manquant, et c'est terminé."} 
        value={"75%"} 
        textValue={"des CV jamais lus par un humain"}></ProblemCard>

        <ProblemCard 
        emoji={"🌀"} 
        title={"Vous ne savez pas quoi garder"} 
        text={"Trop d'informations ? Pas assez ? Vous passez des heures à reformuler sans savoir si c'est vraiment mieux qu'avant."} 
        value={"3h"} 
        textValue={"en moyenne passées par révision de CV"}></ProblemCard>

        <ProblemCard 
        emoji={"😔"} 
        title={"Le doute vous paralyse"} 
        text={"Sans retour concret, vous envoyez votre CV dans le vide — sans jamais savoir ce qui ne va pas ni comment l'améliorer."} 
        value={"6"} 
        textValue={"candidatures sans réponse en moyenne"}></ProblemCard>
      </div>
      </div>
    </section>
  )
}