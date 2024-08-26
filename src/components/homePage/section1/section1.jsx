import picture from "../../../assets/hero-bg.jpg"
import "./section1.css"

export default function Section1 (){
    return(
        <>
           <section className="section1">
                <section className="textArea">
                    <h2 className="yourGuide">
                        YOUR GUIDE TO <br></br>
                        QUALITY COVERAGE
                    </h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>
                        elit, sed do eiusmod tempor incididunt ut labore et<br></br>
                        dolore magna aliqua.
                    </p>
                    <button className="findPlans">
                        FIND PLANS
                    </button>
                </section>
                <img src={picture}></img>
           </section> 
        </>
    )
}