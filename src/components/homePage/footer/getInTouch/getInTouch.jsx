import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import "./getInTouch.css"

export default function GetInTouch (){

    return(
        <div className="getInTouch">
            <h2 className="title">Get In Touch</h2>
            <div className="info">
            <EmailIcon sx={{ color: "blue", maxHeight: "4vh"}}/>
            <p className="e-mail">Email: support@insurezella.com</p>
            <LocalPhoneIcon sx={{ color: "blue", maxHeight: "4vh"}}/>
            <p className="phoneNumb">Tel: +18772270774</p>
            <AccessTimeIcon sx={{ color: "blue", maxHeight: "4vh"}}/>
            <p className="hours">Hours: Mon-Fri 9:00AM - 6:00PM</p>
            <PlaceIcon sx={{ color: "blue", maxHeight: "4vh"}}/>
            <p className="address">300 SE 2nd Street Suite 600 Ft. Lauderdale FL 3301</p>
            </div>
        </div>
    )
}