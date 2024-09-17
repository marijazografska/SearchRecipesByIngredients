import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import './Design.css';
import {Button, Container, Nav, Navbar, Row, Col, CardGroup, Card} from "react-bootstrap";

function Pricing() {
    const navigate = useNavigate();

    const handleSearchPageRedirect = () => {
        navigate('/search');
    };
    const HomePageNav = ()=>
    {
        navigate('/');
    };
    const PremiumNav = () =>
    {
        navigate('/pricing');

    };

    return (
        <div>
            <div className="background-section-no-fog" style={{height:"45vh"}}>
                <Navbar className="navbar-transparent bg-body-tertiary justify-content-between ms-1" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand href="#home">
                            <img
                                src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                width="146"
                                height="36"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                onClick={HomePageNav}
                            />
                        </Navbar.Brand>
                        <Nav className="justify-content-end ms-1">
                            <Nav className="justify-content-end ms-1">
                                <Nav.Link onClick={HomePageNav} style={{color:"white"}} className="navlink">Home</Nav.Link>
                                <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">Search</Nav.Link>
                                <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">About us</Nav.Link>
                                <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">Contact</Nav.Link>
                                <Button variant="outline-light" size="lg" onClick={PremiumNav}>Premium</Button>{' '}
                            </Nav>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="overlay-text" style={{textAlign:"left", marginBottom:"0", marginLeft:"20px"}}>
                    <h2 className="libre-franklin-semibold " style={{fontSize:"72px", fontWeight:"900",width:"40vw", lineHeight:"78px"}}>A payment plan <br/>for every occasion.</h2>
                </div>
            </div>
            <div className="content-section">
                <div className="text-start container">
                    <Container >
                        <Row>
                            <Col>
                                <p className="libre-franklin-24">We offer multiple options:</p> <p className="libre-franklin-light" style={{color:"#636363"}}>Kid's birthday? We've got you covered. A wedding menu? Yep, we can manage that. You choose, we oblige.</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="content-section">
               <Container>
                   <Row>
                       <Col>
                           <Card  border="success" style= {{width: '20rem', height: '60vh',  borderRadius:"0", boxShadow: '0 4px 8px rgba(0,0,0,0.2)', padding: '20px', textAlign: 'center' }} >
                               <Card.Body className="d-flex flex-column justify-content-center">
                                   <Card.Subtitle className="mb-5 mt-0 libre-franklin-semibold" style={{  marginTop:"5px",textAlign: 'left' }}>Small Party</Card.Subtitle>
                                   <Card.Subtitle className="mb-4 mt-0 libre-franklin-24" style={{  marginTop:"5px",textAlign: 'left' }}>30 €</Card.Subtitle>

                                   <Card.Text className="libre-franklin-light" style={{  lineHeight: '1.5' ,textAlign:"left",fontSize:'15px', color:"#636363"}}>
                                       <div style={{display:'inline-block'}} className="libre-franklin-semibold">Get Small Party plan and unlock 3 course meal planning.</div> <br/>Suited for smaller, more intimate gatherings of 2-4 guests, the plan offers a plated appetizer, the main entrée, and dessert. Kid friendly, simple recipes.
                                   </Card.Text>
                                   <Button variant="success" size="lg" style={{marginTop:"20px", fontSize:"16px"}} className="libre-franklin-24">Get Small Party</Button>{' '}
                               </Card.Body>
                           </Card>

                       </Col>
                       <Col>
                           <Card  border="success" style= {{width: '20rem', height: '60vh',  borderRadius:"0", boxShadow: '0 4px 8px rgba(0,0,0,0.2)', padding: '20px', textAlign: 'center' }} >
                               <Card.Body className="d-flex flex-column justify-content-center">
                                   <Card.Subtitle className="mb-5 mt-0 libre-franklin-semibold" style={{  marginTop:"5px",textAlign: 'left' }}>Standard Party</Card.Subtitle>
                                   <Card.Subtitle className="mb-4 mt-0 libre-franklin-24" style={{  marginTop:"5px",textAlign: 'left' }}>60 €</Card.Subtitle>

                                   <Card.Text className="libre-franklin-light" style={{  lineHeight: '1.5' ,textAlign:"left",fontSize:'15px', color:"#636363"}}>
                                       <div style={{display:'inline-block'}} className="libre-franklin-semibold">Get Standard Party plan and unlock 5 course meal planning.</div> <br/>Suited for groups of up to 20 guests, the plan offers one-bite hors d'oeuvres, a plated appetizer, a palate-cleansing salad, the main entrée, and dessert.
                                   </Card.Text>
                                   <Button variant="success" size="lg" style={{marginTop:"20px", fontSize:"16px"}} className="libre-franklin-24">Get Standard Party</Button>{' '}
                               </Card.Body>
                           </Card>
                       </Col>
                       <Col>
                           <Card  border="success" style= {{width: '20rem', height: '60vh',  borderRadius:"0", boxShadow: '0 4px 8px rgba(0,0,0,0.2)', padding: '20px', textAlign: 'center' }} >
                               <Card.Body className="d-flex flex-column justify-content-center">
                                   <Card.Subtitle className="mb-5 mt-0 libre-franklin-semibold" style={{  marginTop:"5px",textAlign: 'left' }}>Grande Party</Card.Subtitle>
                                   <Card.Subtitle className="mb-4 mt-0 libre-franklin-24" style={{  marginTop:"5px",textAlign: 'left' }}>100 €</Card.Subtitle>

                                   <Card.Text className="libre-franklin-light" style={{  lineHeight: '1.5' ,textAlign:"left",fontSize:'15px', color:"#636363"}}>
                                       <div style={{display:'inline-block'}} className="libre-franklin-semibold">Our Grande Party plan offers 5 course meal planning and 3 menus (vegetarian, vegan, continental).</div> <br/>Suited for up to 75 guests, the plan offers ne-bite hors d'oeuvres, a plated appetizer, a palate-cleansing salad, the main entrée, and dessert.
                                   </Card.Text>
                                   <Button variant="success" size="lg" style={{marginTop:"20px", fontSize:"16px"}} className="libre-franklin-24">Get Grande Party</Button>{' '}
                               </Card.Body>
                           </Card>
                       </Col>
                   </Row>
               </Container>
            </div>
            <div>
                <footer className="footer py-3 " >
                    <Container>
                        <Row className="mt-5" >
                            <Col className="custom-col">
                                <img
                                    src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                    width="126"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                                <div className="mt-3">
                                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                                </div>
                            </Col>
                            <Col>
                                <Navbar className="footer1">
                                    <Container>
                                        <Nav>
                                            <Nav.Link href="#deets" className="ms-3" style={{color:"white"}}>Featured</Nav.Link>
                                            <Nav.Link href="#memes" className="ms-3" style={{color:"white"}}>About</Nav.Link>
                                            <Nav.Link href="#memes" className="ms-3" style={{color:"white"}}>Image License Info</Nav.Link>
                                            <Nav.Link href="#memes" className="ms-3">
                                                <img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6b_icon-facebook.svg" className="d-inline-block "/>
                                                <img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6a_icon-twitter.svg" className="d-inline-block ms-3"/>
                                                <img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a69_icon-instagram.svg" className="d-inline-block ms-3"/>
                                            </Nav.Link>

                                        </Nav>
                                    </Container>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </div>

    );
}

export default Pricing;
