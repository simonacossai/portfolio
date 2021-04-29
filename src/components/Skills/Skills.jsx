import React, { Component } from 'react';
import './Skills.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiJavascript} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {GrNode} from 'react-icons/gr';
import {GiSkills} from 'react-icons/gi';
import geometric from '../../assets/geometric.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Skills() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        autoplay: true,
        swipeToSlide: true,
        speed: 1000,
        pauseOnHover: true,
        centerPadding: "60px",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const skills=[
        {
            title: 'Html',
            description: 'blblabalblablabalbal',
            icon: <AiFillHtml5 className="card-skills-icon"/>,
        },
        {
            title: 'Css & Scss',
            description: 'blbalbalalblablabala',
            icon: <DiCss3 className="card-skills-icon"/>
        },
        {
            title: 'Javascript',
            description: 'blbalbalalablbalbala',
            icon: <DiJavascript className="card-skills-icon"/>
        },
        {
            title: 'ReactJs',
            description: 'blbalablablablablal',
            icon: <FaReact className="card-skills-icon"/>
        },
        {
            title: 'MongoDB',
            description: 'blbalablablablabl',
            icon: <DiMongodb className="card-skills-icon"/>
        },
        {
            title: 'NodeJs',
            description: 'blbalablablablabl',
            icon: <GrNode className="card-skills-icon"/>
        }
    ]

    return (
        <>
            <Container className="my-5">
                {skills.length>0 && <h1 className="text-center text-white">Technologies <GiSkills className="mb-2"/></h1>}
                <Slider {...settings}>
                {skills.map((e)=>{
            return (
            <Col className="d-flex justify-content-center align-items-center text-center mt-5">
            <Card className="skills-card py-2">
                {e.icon}
                <div className="icon-bg"></div>
            <Card.Body className="skills-card-body mt-5">                 
                <Card.Title className="text-weight-bold mt-3" style={{fontSize:"22px"}}>{e.title}</Card.Title>
            </Card.Body>
        </Card>
        </Col>
            )})}
                </Slider>
            </Container>
        </>
    )
}


