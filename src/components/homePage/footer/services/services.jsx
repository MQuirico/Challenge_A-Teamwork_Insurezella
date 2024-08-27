import icon1 from "../../../../assets/health_insuranc.png";
import icon2 from "../../../../assets/life_insurance.png"
import icon3 from "../../../../assets/Medicare_supplement.png"
import icon4 from "../../../../assets/Medicare_advantage.png"
import icon5 from "../../../../assets/ACA_obamacare.png"
import "./services.css"

export default function Services (){
    return(
        <>
            <div className="servicesCont">
                <h2 className="titleServices">Services</h2>
                <div className="availableServices">

                    <img src={icon1} className="healthIcon"/>

                    <p className="healthOption">Health Insurance</p>

                    <img src={icon2} className="lifeIcon"/>

                    <p className="lifeOption">Life Insurance</p>

                    <img src={icon3} className="medicareIcon"/>

                    <p className="supplementOption">Medicare Supplement</p>

                    <img src={icon4} className="advantageIcon" />

                    <p className="advantageOption">Medicare Advantage</p>

                    <img src={icon5} className="ACAicon" />

                    <p className="ACAoption">(ACA)Obamacare</p>
                </div>
            </div>
        </>
    )
}