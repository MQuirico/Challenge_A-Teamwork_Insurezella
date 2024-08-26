import icon1 from "../../../assets/health-insurance-icon.png"
import icon2 from "../../../assets/medicare-icon.png"
import icon3 from "../../../assets/life-insurance-icon.png"
import icon4 from "../../../assets/medicare-advantage-icon.png"
import icon5 from "../../../assets/obamacare-icon.png"
import icon6 from "../../../assets/short-term-icon.png"
import AvailableInsurances from "./card/card"
import "./section4.css"

export default function Section4 (){

    const insurancesDetail = [
        {
            key: 1,
            insurance: "Health Insurance",
            icon: icon1,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
        {
            key: 2,
            insurance: "Medicare Supplement",
            icon: icon2,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
        {
            key: 3,
            insurance: "Life Insurance",
            icon: icon3,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
        {
            key: 4,
            insurance: "Medicare Advantage",
            icon: icon4,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
        {
            key: 5,
            insurance: "ACA / Obamacare",
            icon: icon5,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
        {
            key: 6,
            insurance: "Short-Term Medical",
            icon: icon6,
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy."
        },
    ]

    return(
        <>
            <section className="section4">
                <h2 className="title">
                Pick the insurance that suits your needs.
                </h2>
                <div className="availableInsurances">
                    {insurancesDetail.map(insurance =>
                    <AvailableInsurances 
                    key={insurance.key} 
                    insurance={insurance.insurance} 
                    icon={insurance.icon} 
                    description={insurance.description} 
                    />
                    )}
                </div>
            </section>
        </>
    )
}
