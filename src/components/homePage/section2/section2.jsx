import icon1 from "../../../assets/Health insurance.png";
import icon2 from "../../../assets/Medicare supplement.png";
import icon3 from "../../../assets/Medical advantage.png";
import icon4 from "../../../assets/Life insurance.png";
import icon5 from "../../../assets/ACA obamacare.png";
import InsCard from "./card/card";
import "./section2.css"

export default function Section2 (){
    const insuranceOptions = [
        {
            name: "Health insurance",
            logo: icon1,
            key: 1
        },
        {
            name: "Medicare supplement",
            logo: icon2,
            key: 2
        },
        {
            name: "Medicare advantage",
            logo: icon3,
            key: 3
        },
        {
            name: `Life insurance`,
            logo: icon4,
            key: 4
        },
        {
            name: "ACA obamacare",
            logo: icon5,
            key: 5
        },
        
    ]
    return(
        <>
            <section className="cardsSection">
                {insuranceOptions.map(option => 
                <InsCard key={option.key} insurance={option.name} logo={option.logo} />
                )}
            </section>
        </>
    )
}