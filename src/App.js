
import './App.css';
import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax , Background  } from "react-parallax";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
//Components
import Mynavbar from "./Components/my-navbar/mynavbar.component";
import Mycarousal from "./Components/my-carousal/my-carousal.component";
import TitleMassage from "./Components/title-massage/title-massage.component";
import About from "./Pages/about/about.component";
import Image from './assets/img/background/background.webp';
import Skills from "./Pages/skills/skills.component";
import Experience from "./Pages/experience/experience.component";
import TimeLine from "./Components/project-timeline/project-timeline.component";
import ContactForm from "./Pages/contact-form/contact-form.component";
import FooterPanel from "./Components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";


const App =() => {
  return (

    <div className="App" style={{ position: "relative" }} >

      
     <Mycarousal />
     <TitleMassage />
     <Mynavbar />
     <Particles className="particles particles-box" params={particlesOptions}/>

    <div> 
      <Parallax blur={{ min: -30, max: 30 }} bgImage={Image} bgImageAlt="" strength={-200} > 
          <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
      </Parallax>
    </div> 
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
  
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
   
      <hr />
      <FooterPanel />


  
       
     
    </div>



  );
}

export default App;
