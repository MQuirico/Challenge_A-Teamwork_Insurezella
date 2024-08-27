import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../../../assets/logo.png"
import "./brandPlusSM.css"

export default function BrandPlusSocialMedia (){
    return(
        <div className="brandFooter">
                    <img className="logo" src={logo} />
                    <p className="brandText">
                        "Discover the Peace of<br/>
                        Mind You Deserve with<br/>
                        Insurezella "Your Reliable<br/>
                        Insurance Umbrella""
                    </p>

                    <div className="SMiconsFooter">
                    <FacebookRoundedIcon sx={{ color: "blue"}} />
                    <TwitterIcon sx={{ color: "blue"}} />
                    <InstagramIcon  sx={{ color: "blue"}}/>
                    <LinkedInIcon sx={{ color: "blue"}}/>
                    </div>
                </div>
    )
}