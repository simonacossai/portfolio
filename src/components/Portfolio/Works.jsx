import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Portfolio.scss';
export default class Works extends Component {

    render() {
        return (
            <>
            <Container className="Works justify-content-center d-flex"> 
                <Row className="justify-content-center d-flex">
                <Col md={6}>
                <h1 className="text-white mt-3">{this.props.work.title}</h1>
                <a href={this.props.work.link} target="_blank"><img src={this.props.work.picture1} className="work-img" /></a>
                </Col>
                <Col md={6} >
                <a href={this.props.work.link} target="_blank"> <img src={this.props.work.picture2} className="work-img right-work-img"/></a>
                    <p className="text-white text-left">{this.props.work.description}
                    </p>
                </Col>
                </Row>
            </Container>
            </>
        )
    }
}
