
import React, {useState, useEffect} from 'react';
import './About.scss'
import { Container, Row, Col } from 'react-bootstrap'
import about from '../../assets/react.svg';
import icon from '../../assets/about-icon.png';

export default function About() {

    const [show, setShow]= useState(false);
    
     useEffect(() => {
        document.addEventListener("scroll", () => {
            window.scrollY > 500 ? setShow(true) : setShow(false);
        });
    
     }, [window.scrollY])

    return (
        <Container fluid className="about-container d-flex justify-content-center align-items-center" id="about">
        <Row >
            <Col lg={6} md={12} className="about-left-col">
                <img src={about} className="about-img" alt="about-me-image" />
            </Col>
            <Col lg={6} md={12} className="about-right-col text-left d-flex flex-column justify-content-center align-items-center">
                <div className="about-text">
              <div className="d-flex justify-content-between" >
                  {/*show ? <h1>Helloooo</h1> : ''*/} 
              <h1 className="text-left">Get to know me!</h1>
              <img src={icon} className="mb-3 quote-img"/></div>  
                <p>Hi! I'm Simona, a 19yo developer based in Naples, Italy. I started my journey in the web development world not really long ago even tho I've always been a tech enthusiast since I was a child.  </p>
                <p>I started thanks to online courses and bootcamps, where I first got in touch with the MERN stack and the other technologies I'm currently working with. </p>
                <p>If you're curious scroll and go take a look at my most recent projects -and why not- reach me out on Linkedin if you have any questions and let's have a chat! </p>
                <button class="raise my-3">Get my CV</button>
                </div>
            </Col>
        </Row>
    </Container>
    )
}
