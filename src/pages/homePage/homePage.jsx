import Header from "../../components/homePage/header/header"
import Section1 from "../../components/homePage/section1/section1"
import Section2 from "../../components/homePage/section2/section2"
import "./homePage.css"

export default function HomePage (){
    return(
        <div className="home">
           <Header />  
           <Section1 /> 
           <Section2 />      
        </div>
    )
}