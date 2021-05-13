import React, { Component } from 'react'
import './Portfolio.scss';
import {Container, Row, Col} from 'react-bootstrap'
import work from '../../assets/work5.png';
import Works from './Works';
import {workToPass} from '../../data/works';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio" id="portfolio">
                <Container className="portfolio-container mb-5 px-5">
                <Row className="d-flex"> 
                    <Col lg={6} sm={12} className="d-flex flex-column justify-content-start text-left align-items-start py-5" >
                        <h2 className="p-0 m-0">Let's see some of my works!</h2>
                    </Col>
                    <Col lg={6} sm={12} className="portfolio-col" className="d-flex justify-content-center text-center">
                        <img src={work} className="pc-work"/>
                    </Col>
                    </Row>
                </Container>  
                {workToPass.map((e,index)=> <Works work={e} key={index}/>)}           
            </div>
    )}
}
