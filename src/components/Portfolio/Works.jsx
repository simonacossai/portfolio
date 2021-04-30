import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default class Works extends Component {

    render() {
        return (
            <>
            <Container className="mt-5 pt-5 justify-content-center d-flex"> 
                <Row className="mt-3 pt-3 justify-content-center d-flex">
                <Col md={6}>
                <h1 className="text-white py-3">{this.props.work.title}</h1>
                <img src={this.props.work.picture1} style={{width: "100%", height: "300", objectFit: "contain"}}/>
                </Col>
                <Col md={6} className="mt-2">
                    <img src={this.props.work.picture2} style={{width: "100%", height: "300px", objectFit: "contain"}}/>
                    <p className="text-white py-2 text-left">{this.props.work.description}
                    </p>
                </Col>
                </Row>
            </Container>
            </>
        )
    }
}
