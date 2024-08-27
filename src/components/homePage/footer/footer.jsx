import "./footer.css"
import Services from './services/services';
import Company from './company/company';
import BrandPlusSocialMedia from './brand + socialMedia/brandPlusSM';
import GetInTouch from "./getInTouch/getInTouch";


export default function Footer (){
    return(
        <>
            <footer className="footerSection">
                <BrandPlusSocialMedia />
                <Services />
                <Company />
                <GetInTouch />
            </footer>
            <div className="footerBottom"/>
        </>
    )
}