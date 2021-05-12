import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap';
import homer from '../../assets/homered.png';
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import './Home.scss';
import {RiLinkedinFill} from 'react-icons/ri';
import {FaGithubAlt, FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-scroll';

export default class Home extends Component {
    render() {
        return ( 
            <Container fluid className="home-container">
                <Row className="d-flex justify-content-center align-items-center text-center home-row">
                  <h1 className="px-5 mx-5 animate__animated animate__fadeInDown">HI, I'M SIMONA.
                  <br/>
                   LET'S BUILD SOMETHING GREAT TOGETHER!</h1>
                  <div className="home-div animate__animated animate__fadeIn"></div>
                  <img src={homer} className="home-img animate__animated animate__fadeIn"/>
                </Row>
                <Link  smooth={true} duration={900} to="about" className="nav-links" >
                <IoIosArrowDropdownCircle className="arrow-home ml-auto animate__animated animate__pulse animate__infinite"/>
                </Link>
                <div className="socialIconWrapper d-flex">
                    <div className="animate__animated animate__fadeInLeft animate__delay-500ms animate__faster socialIconContainer p-2"><RiLinkedinFill className="socialIcon"/></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-1s animate__faster socialIconContainer p-2 mx-3"><FaGithubAlt className="socialIcon"/></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s animate__faster socialIconContainer p-2"><FaFacebookF className="socialIcon"/></div>
                </div>
            </Container>
        )
    }
}
