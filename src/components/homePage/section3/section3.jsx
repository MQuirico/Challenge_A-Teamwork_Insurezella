import picture from "../../../assets/committed-help.png"
import icon1 from "../../../assets/save_money.png"
import icon2 from "../../../assets/agents.png"
import Sec3Card from "./card/card"
import "./section3.css"

export default function Section3 (){

    const actions = [
        {
            action: "Save Money Compare Plans",
            icon: icon1,
            key: 1
        },
        {
            action: "Licensed Agents",
            icon: icon2,
            key: 2
        }
    ]

    return(
        <>
            <section className="section3">
                <img src={picture} className="img"/>
                <aside className="textAreaSec3">
                    <h2 className="titleCommitted">
                        Committed to help you <br />find the right plan
                    </h2>
                    <p className="textCommitted">
                        Insurance is an important financial tool that can help you<br/>
                        protect yourself and your loved ones from financial losses in the<br/>
                        event of an unexpected event. It is important to consider your<br/>
                        individual needs and circumstances when choosing the right<br/>
                        insurance coverage for you and your family.
                    </p>
                    <button className="buttonAbout">
                        ABOUT INSUREZELLA
                    </button>
                    <div className="actions">
                        {actions.map(action =>
                            <Sec3Card key={action.key} icon={action.icon} action={action.action} />
                        )}
                    </div>
                </aside>
            </section>
        </>
    )
}