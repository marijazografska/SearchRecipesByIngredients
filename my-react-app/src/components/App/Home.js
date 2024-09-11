import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Design.css'; // Import your custom CSS
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleSearchPageRedirect = () => {
        navigate('/search'); // Redirect to the search page
    };
    return (
        <div>
            {/* Background Section */}
            <div className="background-section" >
                {/* Full-width Navbar */}
                <Navbar className="navbar-transparent bg-body-tertiary justify-content-between ms-1" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand href="#home">
                            <img
                                src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                width="126"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav className="justify-content-end ms-1">
                            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
                            <Nav.Link href="#features" style={{color:"white"}}>Features</Nav.Link>
                            <Nav.Link href="#pricing" style={{color:"white"}}>Pricing</Nav.Link>
                            <Button variant="outline-light" size="lg">Light</Button>{' '}
                        </Nav>
                    </Container>
                </Navbar>


                {/* Overlay Text */}
                <div className="overlay-text">
                    <h1 className="display-4 font-h1">Cook with What You Have!</h1>
                    <p className="lead ibm-plex-mono-regular">Discover recipes that match your ingredients.</p>
                    <Button variant="success" size="lg" onClick={handleSearchPageRedirect}>Get started</Button>{' '}

                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="text-start container">
                    <Container >
                        <Row>
                            <Col>
                                <p className="libre-franklin-24">Unlock Your Pantry's potential:</p> <p className="libre-franklin-light">An innovative recipe app that generates personalized recipes based on the ingredients that you have at home.</p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    {/* Add more content here */}

                </div>
                <div className="content-section">
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    <Col sm={4}><img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6e_icon-feature-02.svg"/></Col>
                                    <Col sm={8} className="ibm-plex-mono-regular text-start" ><p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col sm={4}><img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6e_icon-feature-02.svg"/></Col>
                                    <Col sm={8} className="ibm-plex-mono-regular text-start" ><p className="justify-content-start ms-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>

                                </Row></Col>
                            <Col>
                                <Row>
                                    <Col sm={4}><img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6e_icon-feature-02.svg"/></Col>
                                    <Col sm={8} className="ibm-plex-mono-regular text-start" ><p className="justify-content-start ms-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="content-section ">
                    <Carousel interval={2000} className="custom-carousel">
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/xsMpF5V/eggs.jpg"
                                alt="Image One"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/n7r7Z15/pasta.jpg"
                                alt="Image Two"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/VYxCPwb/stew.jpg"
                                alt="Image Two"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="content-section">
                    <p className="custom-p"><p className="custom-bold">Illud decore voluptaria has at.</p> Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo.</p>
                    <ButtonGroup className="buttonGroup">
                        <Button variant="link" className="custom-link ibm-plex-mono-regular">MORE</Button>
                        <Button variant="link" className="custom-link ibm-plex-mono-regular">ABOUT US</Button>
                    </ButtonGroup>
                </div>
            </div>
            <footer className="footer py-3 ">
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
                            <Navbar>
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
    );
}

export default HomePage;