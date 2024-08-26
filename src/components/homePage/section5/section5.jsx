import picture from "../../../assets/protecting.png"
import "./section5.css"
export default function Section5 (){
    return(
        <>
            <section className="section5">
                <img src={picture} />
                <aside className="textAreaSec5">
                    <h2 className="secTitle">
                        Protecting people, one <br/>
                        policy at a time.
                    </h2>
                    <p className="textSect5">
                        We are committed to delivering the highest standards of pro-<br/>
                        tection, tailored to meet the unique needs of each individual and<br/>
                        family. Our dedicated team of professionals works tirelessly to<br/>
                        offer comprehensive insurance solutions that not only safeguard<br/>
                        your assets but also offer you the support and assistance you<br/>
                        need in times of uncertainty.
                    </p>
                    <button className="learnButton">
                        LEARN MORE
                    </button>
                </aside>
            </section>
        </>
    )
}