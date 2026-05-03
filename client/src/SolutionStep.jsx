import "./SolutionStep.css"

export function SolutionStep({num,title,text,tag}){ 
  return(
    <div className="step">
      <div className="step-num">{num}</div>
      <div className="step-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="step-tag">{tag}</div>
      </div>
    </div>
  )
}