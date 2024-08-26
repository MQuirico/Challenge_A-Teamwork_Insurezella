import picture1 from "../../../assets/doctor.jpg"
import picture2 from "../../../assets/family-together-xxl.jpg"
import picture3 from "../../../assets/medical-appointment.jpg"
import picture4 from "../../../assets/man-signing.jpg"
import Sect6Card from "./card/card"
import "./section6.css"

export default function Section6 (){
    const cardsInfo = [
        {
            key: 1,
            title: "Health Insurance",
            text: "Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now. Our Health Insurance Agency Provides You with Plans That Meet Your Needs.",
            picture: picture1,
        },
        {
            key: 2,
            title: "Life Insurance",
            text: "Life Insurance allows you to save and build wealth over time while also protecting your family should the worst happen.",
            picture: picture2,
        },
        {
            key: 3,
            title: "Medicare Supplement",
            text: "With Medicare supplements, you won't have medical cost surprises, which could break your budget. Medicare supplements can help protect your finances from high costs, which can destroy your nest egg.",
            picture: picture3,
        },
        {
            key: 4,
            title: "Medicare Advantage",
            text: "Medicare Advantage Plans cover all Original Medicare services, and some offer drug, vision, hearing, dental, or wellness coverage.",
            picture: picture4,
        }
    ]

    return(
        <>
            <section className="section6">
                <h2 className="sect6Title">
                    We're here to help.
                </h2>
                <div className="sect6Cards">
                    {cardsInfo.map(card =>
                        <Sect6Card key={card.key} title={card.title} text={card.text} picture={card.picture} />
                    )}
                </div>
            </section>
        </>
    )
}
