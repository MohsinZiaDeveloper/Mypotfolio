import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./my-carousal.style.css";
import slider1 from '../../assets/img/carousal/laptop2.jpg';
import slider3 from '../../assets/img/carousal/laptop3.jpg';
import slider2 from '../../assets/img/carousal/slide3.webp';
import ScrollDown from '../scroll-down/scroll-down.component';



const Mycarousal = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100  custom-img" src={slider1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100  custom-img" src={slider2}  alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100  custom-img" src={slider3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
    )
}

export default Mycarousal
