import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import { BsPersonLinesFill } from 'react-icons/bs';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <div className="d-flex ">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="portfolioNavbar mt-1 px-4">
                    <Navbar.Brand ><img src={logo} className="navbar-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav d-flex ml-auto ">
                        <Nav className="ml-auto nav-link ">
                            <Nav.Link >About</Nav.Link>
                            <Nav.Link href="#pricing">Skills</Nav.Link>
                            <Nav.Link href="#deets">Portfolio</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            Contacts
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
