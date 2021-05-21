import React from 'react';
import "./project-timeline.style.css";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
// projects

import interiordesigners from "../../assets/img/projects/interiordesigners.png"
import amazonclone from "../../assets/img/projects/amazonclone.png";
import todoapp from "../../assets/img/projects/todoapp.png";
import netflix from "../../assets/img/projects/netflixclone.png";
import potfoliowebimg from "../../assets/img/projects/potfolioweb.png";
import hiking from "../../assets/img/projects/hiking.png";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import angular from "../../assets/img/skills/angularSvg.png";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import elementor from "../../assets/img/skills/elementor.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import firebase from "../../assets/img/skills/firebaseicon.svg";


const TimeLine = () => {
    return (
        <div id="projects" className="fontfmily" >
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
          <Events>
          {/* Project: Interior Designers 2021 */}
          <ImageEvent
              className="text-center fontfmily"
              date="01/5/2021"
              text="Interior Designers 2021"
              src={interiordesigners}
              alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main fontfmily"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left fontfmily">
                        <Card.Body >
                          <label className="bold">Description:</label> This interior designer website is build for my US base Client. Main goal with this project was to build a website which deals with the designers and as well as user a designer showcase there design using this website and then recruiters hire them by knowing there work .
                          This is a complete Giant project includes all stuff like http requests ,hosting ,databse etc.
                          <hr />
                          <label className="bold">Features:</label>
                          <ul className="list-styles pt-1">
                            <li>Showcase Designers designs </li>
                            <li>Powered by Angular and Material UI</li>
                            <li>Real-time API calls with Backend features</li>
                            <li>Respoisive Design</li>
                          </ul>
                          <hr />
                          <label className="bold" >Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={angular}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Angular
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                              </span>
                            </li>
                            
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="http://www.interiordesigns2020.com/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                
                </div>
              </div>
            </ImageEvent>
  
  
  {/* Project: React Amazone clone  */}
  <ImageEvent 
              date="16/03/2021"
              className="text-center fontfmily"
              text="React Amazon Clone "
              src={amazonclone}
              alt="MERN Tip Calculator" 
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main fontfmily"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left fontfmily">
                        <Card.Body>
                          <label className="bold">Description:</label> My goal with this project was to practice my skills and polish my skills as a front end developer not only in angular but as well as in react js and that was a great experience .
                          <hr />
                          <label className="bold">Features:</label>
                          <ul className="list-styles pt-1">
                            <li>Add items to card For Purchase</li>
                            <li>Real-time API calls with Backend features</li>
                            <li>Styled with  Material-UI</li>
                          </ul>
                          <hr />
                          <label className="bold">Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={firebase}
                                  alt="firebase"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Firebase
                              </span>
                            </li>
                         
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                    href="https://e-challange-f7bcf.web.app/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>
  
            {/* Project: React Todo app */}
            <ImageEvent
              date="01/05/2021"
              className="text-center fontfmily"
              text="React Todo App"
              src={todoapp}
              alt="Get GitHub Info"
            >
              <div className="d-flex justify-content-between flex-column mt-1 fontfmily">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <label className="bold">Description:</label> This is a Todo App created with React and Material UI that keeps a track of your Todos
                          <hr />
                          <label className="bold">Features:</label>
                          <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                          </ul>
                          <hr />
                          <label className="bold">Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_GIT}
                                  alt="Github API"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                GitHub API
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://mohsinzia-01.github.io/addtodo/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>
  
            {/* Project: Netflix Clone */}
            <ImageEvent
              date="21/01/2020"
              className="text-center fontfmily"
              text="Netflix Clone React"
              src={netflix}
              alt="netflix"
            >
              <div className="d-flex justify-content-between flex-column mt-1 fontfmily">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <label className="bold">Description:</label> Not yet Completed Working on that ..
                          <hr />
                          <label className="bold">Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={firebase}
                                  alt="firebase"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Firebase
                              </span>
                            </li>
                         
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                              </span>
                            </li>
                          </ul>
                         
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
            
              </div>
            </ImageEvent>
  
            {/* Project: potfolio wordpress */}
  
            <ImageEvent
              date="14/12/2020"
              className="text-center fontfmily"
              text="Potfolio Wordpress"
              src={potfoliowebimg}
              alt="potfolio "
            >
              <div className="d-flex justify-content-between flex-column mt-1 fontfmily">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <label className="bold">Description:</label> My another potfolio app bild on wordpress .
                          <hr />
                          <label className="bold">Features:</label>
                          <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                            
                          </ul>
                          <hr />
                          <label className="bold">Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={elementor}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Elementor
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={elementor}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Elemenotor Pro 
                              </span>
                            </li>
                            
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="http://mohsinziadeveloper.epizy.com/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
            
                </div>
              </div>
            </ImageEvent>
  
            {/* Project: Product_Hunt_Clone */}
  
            <ImageEvent
              date="15/12/2019"
              className="text-center fontfmily"
              text="Product Hunt Clone"
              src={hiking}
              alt="Product Hunt Clone"
            >
              <div className="d-flex justify-content-between flex-column mt-1 fontfmily">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                        <label className="bold">Description:</label> My goal with this project was to practice my skills and polish my skills as a front end developer not only in wordpress  that was a great experience and i am still working on that not fully completed yet.
                          <hr />
                          <label className="bold">Features:</label>
                          <ul className="list-styles pt-1">
                            <li>know upcomming treaks </li>
                            <li>Family treaks </li>

                          </ul>
                          <hr />
                          <label className="bold">Tech used:</label>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={elementor}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Elementor
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={elementor}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Elemenotor Pro 
                              </span>
                            </li>
                            
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="http://mohsinziahikingclub.epizy.com/"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>

           
          </Events>
        </Timeline>
      </div>
    )
}

export default TimeLine
