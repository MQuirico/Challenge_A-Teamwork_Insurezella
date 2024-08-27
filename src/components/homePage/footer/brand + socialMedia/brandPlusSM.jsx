import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
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

                    <Tooltip title="Facebook">
                    <FacebookRoundedIcon sx={{ color: "blue", cursor: "pointer"}} />
                    </Tooltip>

                    <Tooltip title="Twitter">
                    <TwitterIcon sx={{ color: "blue", cursor: "pointer"}} />
                    </Tooltip>

                    <Tooltip title="Instagram">
                    <InstagramIcon  sx={{ color: "blue", cursor: "pointer"}}/>
                    </Tooltip>
                    
                    <Tooltip title="LinkedIn">
                    <LinkedInIcon sx={{ color: "blue", cursor: "pointer"}}/>
                    </Tooltip>
                    </div>
                </div>
    )
}