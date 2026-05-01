import "./Accueil.css"

export function Accueil(){
  return(
    <div className="video">
 <video autoPlay muted={true} loop>
      <source type="video/mp4" src="../assets/hero-background.mp4" >
      </source>
      </video>
      <div className="title">
        <p style={{
          marginBottom:"5vh",
          marginRight:"15vh"
        }
        }>Staying late reviewing your resume ?</p>
        <p style={{
          marginBottom:"3vh",
          marginLeft:"20vh"
        }}>Take a rest, let us do it for you</p>

        {/* Ajouter une animation fade pour les 2 p g->c c<-d */}
      </div>
      
    </div>
  );
}