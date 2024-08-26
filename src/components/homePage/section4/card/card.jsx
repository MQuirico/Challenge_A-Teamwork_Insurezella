import "./card.css"

export default function AvailableInsurances ({insurance, icon, description}){
    return(
        <div className="insurancesCard">
            <img src={icon} className="availInsIcon"/>
            <h3 className="availInsTitle">{insurance}</h3>
            <p>{description}</p>
        </div>
    )
}