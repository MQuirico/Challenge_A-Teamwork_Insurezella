import "./card.css"
export default function Sec3Card({...props}){
    return(
        <div className="sec3Card">
            <img src={props.icon} className="iconAction"/>
            <h3 className="actionText">{props.action}</h3>
        </div>
    )
}