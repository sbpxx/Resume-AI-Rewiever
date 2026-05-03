import "./AvisCard.css"

export function AvisCard({ stars, quote, avatarLetter, name, role }) {
  return (
    <div className="avis-card">
      <div className="avis-stars">{stars}</div>
      <p className="avis-quote">« {quote} »</p>
      <div className="avis-author">
        <div className="avis-avatar">{avatarLetter}</div>
        <div>
          <div className="avis-name">{name}</div>
          <div className="avis-role">{role}</div>
        </div>
      </div>
    </div>
  )
}