import Header from "../../components/homePage/header/header"
import Section1 from "../../components/homePage/section1/section1"
import "./homePage.css"

export default function HomePage (){
    return(
        <div className="home">
           <Header />  
           <Section1 />       
        </div>
    )
}