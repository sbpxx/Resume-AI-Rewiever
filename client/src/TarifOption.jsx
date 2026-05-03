import "./TarifOption.css"

export function TarifOption({ name, price, currency, period, description, features, ctaText, ctaStyle, featured, badge }) {
  return (
    <div className={`plan-card ${featured ? "featured" : ""}`}>
      {badge && <div className="plan-badge">{badge}</div>}
      <div className="plan-name">{name}</div>
      <div>
        <div className="plan-price">
          {currency && <sup>{currency}</sup>}
          {price}
          {period && <span className="period"> {period}</span>}
        </div>
      </div>
      <p className="plan-desc">{description}</p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index} className={feature.off ? "off" : ""}>{feature.text}</li>
        ))}
      </ul>
      <a href="#essai" className={`plan-cta ${ctaStyle}`}>{ctaText}</a>
    </div>
  )
}