import React from 'react';
import "./contact-form.style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const ContactForm = () => {
    return (
        <div id="contact" className="contact">
        <h1 className="pt-3 text-center font-details-b pb-3 contactme">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:mohsinziaariduni1@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="emial">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/mohsinziadeveloper/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/mohsinzia-01" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
             
              <div className="m-2">
                <a href="https://www.facebook.com/profile.php?id=100004579068827" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
}

export default ContactForm
