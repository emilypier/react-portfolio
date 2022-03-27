import Project from "../../components/Project"
import About from "../../components/About"
import ContactForm from "../../components/Contact"
import Resume from "../../components/Resume"

export default function MainContainer(props){
    function currentPage(){
    if (props.page ==='about'){
      return <About />
    }
    if(props.page ==='projects'){
    return  <Project />
    }
    if(props.page ==='resume'){
      return  <Resume />
      }
    else{
      return <ContactForm />
    }
  }
  return(
    <div className="mainContent">
      {currentPage()}
    </div>
  )
}