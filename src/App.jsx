import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About.jsx"
import BaseProject from "./components/Project/BaseProject"
import Skills from "./components/skills/Skills.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"
import Mail from "./components/Mail.jsx"
import EmailForm from "/Mailnew.jsx"


function App() {


  return (

    <>
      < Navbar />
      <Home />
      <About/>
      <Skills />
      <BaseProject />
      <Contact/>
      <Footer/>
       {/* <Mail/> */}
      {/* <EmailForm/> */}


    </>

  )
}

export default App
