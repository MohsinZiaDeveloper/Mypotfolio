
import Profile1 from "../../assets/img/profile/Mohsin zia.jpeg";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import bgimage from '../../assets/img/background/background.webp';

const About = () => {
  return (
    <div id="about" className="Aboutsection">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
      
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile1} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start  p-2 my-details rounded">
                Hi there! I am &nbsp; <label>Mohsin zia </label>
                <p>
                    <br />A passionate programmer , born and brought up in Pakistan . I am a Front End Web Developer with React.js, Redux, Angular  as my tech stack.
                    <br />
                    In 2020, I successfully completed my Engineering with specialization in 'Bachlors of Science in Computer Science'.
                    <br />
                    Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                    <br />
                    
                    <br /> Along with that, I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    <br /> <br />
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1Y0pJWZaA7E15030dPlj7ce1K7LO1_yS3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/mohsinzia-01" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/mohsinziadeveloper/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;