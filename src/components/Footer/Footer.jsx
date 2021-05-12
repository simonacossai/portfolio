import React from 'react'
import {Container, Row} from 'react-bootstrap';
import './Footer.scss';

export default function Footer() {
    return (
        <Container className="Footer mt-5">
            <Row className="d-flex align-items-center justify-content-center text-center p-2">
                <p className="text-white text-center">Made with ❤️ by me -<span className="pink-text"> © 2021 Simona Cossai </span></p>
            </Row>
        </Container>
    )
}
