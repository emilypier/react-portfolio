import Project from "../../components/Project"
import About from "../../components/About"
import ContactForm from "../../components/Contact"
export default function MainContainer(props){
    function currentPage(){
    if (props.page ==='about'){
      return <About />
    }
    if(props.page ==='projects'){
    return  <Project />
    }
    else{
      return <ContactForm />
    }
  }
  return(
    <div>
      {currentPage()}
    </div>
  )
}