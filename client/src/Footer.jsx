import "./Footer.css"

const produit = [
  { label: "Comment ça marche", href: "#solution" },
  { label: "Essai gratuit", href: "#essai" },
  { label: "Tarifs", href: "#tarifs" },
]

const ressources = [
  { label: "Guide CV 2025", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ", href: "#" },
]

const legal = [
  { label: "Mentions légales", href: "#" },
  { label: "Confidentialité", href: "#" },
  { label: "CGU", href: "#" },
]

export function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">Moon Workers</a>
            <p>Votre CV mérite d'être vu. Notre IA s'assure qu'il ne passe jamais inaperçu.</p>
          </div>

          <div className="footer-col">
            <h4>Produit</h4>
            <ul>
              {produit.map((item, index) => (
                <li key={index}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ressources</h4>
            <ul>
              {ressources.map((item, index) => (
                <li key={index}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Légal</h4>
            <ul>
              {legal.map((item, index) => (
                <li key={index}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Moon Workers · Tous droits réservés</p>
          <div className="footer-social">
            <a href="#" title="Instagram">ig</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter/X">𝕏</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
