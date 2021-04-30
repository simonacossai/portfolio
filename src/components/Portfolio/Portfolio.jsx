import React, { Component } from 'react'
import './Portfolio.css';
import {Container, Row, Col} from 'react-bootstrap'
import work from '../../assets/work5.png';
import Works from './Works';
import Cattura from '../../assets/Cattura.PNG';
import Cattura1 from '../../assets/Cattura1.PNG';
import Spotify from '../../assets/spotify.PNG';
import Spotify1 from '../../assets/spotify2.PNG';
import pinterest from '../../assets/Cattura.JPG';
import pinterest1 from '../../assets/pinterest1.JPG';

export default class Portfolio extends Component {
  
    render() {
        let workToPass=  {
            title: 'AMAZON REDESIGN',
            description: 'Amazon redesign: the frontend is made in React while for building the backend I used Node and Mongodb.',
            picture1: Cattura,
            picture2: Cattura1
        }
        let workToPass1=  {
            title: 'SPOTIFY CLONE',
            description: 'This spotify clone is one of my first React project, built to start using Redux and fetching data from my backend, again built using Node and Mongodb.',
            picture1: Spotify,
            picture2: Spotify1
        }
        let workToPass2=  {
            title: 'PINTEREST REDESIGN',
            description: 'Pinterest redesign is built using React+Redux and Scss, all the data is fetched and created thanks to the backend in Node+Express and Mongodb as Database.',
            picture1: pinterest,
            picture2: pinterest1
        }
        return (
            <div style={{backgroundColor: "#040E4A"}} className="py-5" style={{marginTop:"150px"}}>
                <Container style={{backgroundColor: "#fff", borderRadius: "16px"}} className="portfolio-container">
                <Row className="d-flex"> 
                    <Col lg={6} className="d-flex justify-content-center text-center align-items-center py-5" style={{flexDirection:"column"}}>
                        <h2 className="p-0 m-0">Let's see some of my works!</h2>
                    </Col>
                    <Col lg={6} className="portfolio-col" className="d-flex justify-content-center text-center" >
                        <img src={work} className="pc-work"/>
                    </Col>
                    </Row>
                </Container>             
                        <Works work={workToPass}/>
                        <Works work={workToPass1}/>
                        <Works work={workToPass2}/>
            </div>
        )
    }
}
