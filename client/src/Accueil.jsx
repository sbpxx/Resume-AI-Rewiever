import "./Accueil.css"

export function Accueil(){
  return(
      <section id="hero" style={{maxWidth:"none", padding:"0"}}>
        <div className="hero-fade"></div>
          <video  muted={true}>
            <source type="video/mp4" src="../assets/hero-background.mp4"></source>
          </video>
          <div className="hero-content">
            <h1 className="hero-title">
              Fatigué d'ajuster votre CV ?<br/>
              <em>Reposez-vous, on s'en charge.</em>
            </h1>
            <p className="hero-subtitle">Analyse instantanée · Feedback personnalisé · Plus d'entretiens</p>
            <div className="hero-cta">
              <a href="#essai" className="btn-primary">Analyser mon CV gratuitement</a>
              <a href="#solution" className="btn-ghost">Voir comment ça marche</a>
            </div>
          </div> {/* Ajouter une animation fade pour les 2 p g->c c<-d */}
    </section> 
  );
}