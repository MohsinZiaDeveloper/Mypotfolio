import React from 'react';
import Typewriter from "typewriter-effect";
import './title-massage.style.css';





const titleMassage = () => {
    return (
      <div className="MyTitleMessage">
        <div className="titleMessage">
          <div className="heading">
            <div className="main text-center mb-3 fontstyle1">
              Hi, I am
              <br />
              <span>
                <strong className="fontstyle">Mohsin zia </strong>
              </span>
            </div>
            <div className="sub fontstyle1">
              <Typewriter
                options={{
                  strings: ["React Developer", "Angular Developer", "Learner"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default titleMassage
