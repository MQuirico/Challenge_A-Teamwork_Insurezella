import Logo from "../../../assets/logo.png"
import Sections from "./sections/sections"
import { useMediaQuery } from '@mui/material';
import TemporaryDrawer from "./drawer (mobile)/drawer";
import "./header.css"

export default function Header (){
    const isMobile = useMediaQuery('(min-width:300px)') && useMediaQuery('(max-width: 840px)')
    return(
        <>
        <header className="header">
            <div className="lightBlue">
                {isMobile && <TemporaryDrawer sx={{ color: "black"}} />}
                <h1 className="connect">Want to connect with us?</h1>
                <h3 className="mail">📧Mail us: support@insurezella.com</h3>
                <h3 className="phone">&#128222; Call us: (877) 227-0774</h3>
            </div>
            <div className="white">
                <img src={Logo} className="logo"></img>
                <Sections />
                <button className="callUs">Call Us Now &#10161;</button>
            </div>
        </header>
        </>
    )
}