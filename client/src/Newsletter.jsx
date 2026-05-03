import "./Newsletter.css"

export function Newsletter() {
  function handleNewsletter(e) {
    e.preventDefault()
    const input = e.target.querySelector("input")
    const btn = e.target.querySelector("button")
    btn.textContent = "✦ Merci !"
    btn.classList.add("btn-success")
    input.value = ""
    input.placeholder = "Vous êtes inscrit(e) !"
    setTimeout(() => {
      btn.textContent = "M'inscrire"
      btn.classList.remove("btn-success")
      input.placeholder = "votre@email.com"
    }, 3500)
  }

  return (
    <div className="newsletter-wrapper">
      <section id="newsletter">
        <p className="newsletter-label">Restez informé</p>
        <h2 className="newsletter-title">
          Conseils carrière,<br /><em>livrés chaque semaine.</em>
        </h2>
        <p className="newsletter-intro">
          Recevez nos meilleures astuces pour optimiser votre CV, passer les ATS et décrocher plus d'entretiens — directement dans votre boîte mail.
        </p>

        <form className="newsletter-form" onSubmit={handleNewsletter}>
          <input className="newsletter-input" type="email" placeholder="votre@email.com" required />
          <button className="btn-newsletter" type="submit">M'inscrire</button>
        </form>

        <p className="newsletter-note">✦ &nbsp; Aucun spam · Désabonnement en un clic</p>
      </section>
    </div>
  )
}