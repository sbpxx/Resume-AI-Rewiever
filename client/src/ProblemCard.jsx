import "./ProblemCard.css"

export function ProblemCard({emoji,title,text,value,textValue}){
    return(
        <div className="problem-card">
            <div className="emoji-card">{emoji}</div>
            <h3 className="title-card">{title}</h3>
            <p className="text-card">{text}</p>
            <div className="value-card">{value}</div>
            <span className="text-value-card">{textValue}</span>
        </div>
    )
}