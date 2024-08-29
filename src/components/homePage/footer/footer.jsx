import "./footer.css"
import Services from './services/services';
import Company from './company/company';
import BrandPlusSocialMedia from './brand + socialMedia/brandPlusSM';
import GetInTouch from "./getInTouch/getInTouch";
import { useMediaQuery } from "@mui/material"; 

export default function Footer (){

    const isMobile = useMediaQuery('(min-width:300px)') && useMediaQuery('(max-width: 840px)')



    return(
        <>
        {isMobile ? ( 
                    <div className="mobileFooter">
                        <footer className="footer1">
                            <BrandPlusSocialMedia />
                            <Services />
                        </footer>
                        <div className="lightBlueFooter" />
                        <footer className="footer2">
                            <Company />
                            <GetInTouch />
                        </footer>
                    </div>

        ) : (
            
            <>
            <footer className="footerSection">
                <BrandPlusSocialMedia />
                <Services />
                <Company />
                <GetInTouch />
            </footer>
            <div className="footerBottom"/>
            </>
        )}
            
        </>
    )
}