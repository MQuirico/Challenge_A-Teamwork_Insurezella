import Header from "../../components/homePage/header/header"
import Section1 from "../../components/homePage/section1/section1"
import Section2 from "../../components/homePage/section2/section2"
import Section3 from "../../components/homePage/section3/section3"
import Section4 from "../../components/homePage/section4/section4"
import Section5 from "../../components/homePage/section5/section5"
import Section6 from "../../components/homePage/section6/section6"
import Footer from "../../components/homePage/footer/footer"
import "./homePage.css"

export default function HomePage (){
    return(
        <div className="home">
           <Header />  
           <Section1 /> 
           <Section2 />   
           <Section3 />  
           <Section4 /> 
           <Section5 />
           <Section6 />
           <Footer />
        </div>
    )
}