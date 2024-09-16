import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import '../App/Design.css';
import {Button, Container, Nav, Navbar, Row, Col, Card} from "react-bootstrap";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
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

    useEffect(() => {
        axios.get(`/api/recipes/${id}/info`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error('Error fetching recipe details:', error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <div className="background-section-no-fog" style={{height:"45vh"}}>
                {/* Full-width Navbar */}
                <Navbar className="navbar-transparent bg-body-tertiary justify-content-between ms-1" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand onClick={HomePageNav}>
                            <img
                                src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                width="126"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav className="justify-content-end ms-1">
                            <Nav.Link onClick={HomePageNav} style={{color:"white"}}>Home</Nav.Link>
                            <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}}>Search</Nav.Link>
                            <Button variant="outline-light" size="lg" onClick={PremiumNav}>Premium</Button>{' '}
                        </Nav>
                    </Container>
                </Navbar>
                <div className="overlay-text recipe-title " style={{textAlign:"left", marginBottom:"0", marginLeft:"20px"}}>
                    <h1><b>{recipe.title}</b></h1>
                </div>
            </div>

        <div>
            <div className="content-section" style={{marginBottom:"50"}}>
                <div className="text-start container">
                    <Container>
                        <Row className=" g-0 h-100">
                            <Col className="d-flex align-items-stretch" style={{height:"70vh"}}>
                                <img  src={recipe.imageUrl} alt={recipe.title}
                                      className="card-img-left img-fluid"
                                      style={{ objectFit: 'cover', width: '100%', height: '100%'}}
                                />
                            </Col>
                            <Col className="d-flex align-items-stretch"  style={{height:"70vh"}}>
                            <Card  className="h-100 w-100">
                                <Card.Header><h2 className="libre-franklin-24" style={{fontSize:"22px"}}>Ingredients</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text >
                                        <ul className="libre-franklin-light " style={{fontSize:"20px", color:"#636363", listStyle:"none"}}>
                                            {recipe.ingredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                                            ))}
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <div className="content-section" style={{marginTop:"0"}}>
                <div className="text-start container">
            <h2 className="libre-franklin-24">Instructions</h2>
                <br/>
            <p className="libre-franklin-light " style={{lineHeight:"45px"}}>{recipe.instructions}</p>
                </div>
            </div>
            <div className="content-section" style={{marginTop:"0"}}>
                <div className="text-start container">
                   <Container>
                       <Row>
                           <Col><Card border="success">
                               <Card.Img variant="top" src="https://i.guim.co.uk/img/media/7d28c0ed6e54b7cc95e3ba05699adf519ae4f270/81_196_1882_1130/master/1882.jpg?width=465&dpr=1&s=none" />
                               <Card.Body >
                                   <Card.Title>Chef Henry Golding</Card.Title>
                                   <Card.Subtitle>Four Seasons Hotel, London</Card.Subtitle>
                                   <Card.Text style={{marginTop:"20px"}}>
                                       {recipe.title} is best consumed among friends and close family. I highly recommend it!
                                   </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                               </Card.Footer>
                           </Card></Col>
                           <Col><Card border="success">
                               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.HDjTvW-kC7BoJK2fGxPYDwHaE7?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                               <Card.Body >
                                   <Card.Title>Chef Denzel Jackson</Card.Title>
                                   <Card.Subtitle>Nobu Restaurant, Los Angeles</Card.Subtitle>
                                   <Card.Text style={{marginTop:"20px"}}>
                                       {recipe.title} is my favorite go-to dish when I want to impress. It is a must!
                                   </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                               </Card.Footer>
                           </Card></Col>
                           <Col><Card border="success">
                               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.f8zmzK9AWRd99IHnTHyECwHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                               <Card.Body >
                                   <Card.Title>Chef Mao Wang</Card.Title>
                                   <Card.Subtitle>TRB Hutong, Bejing</Card.Subtitle>
                                   <Card.Text style={{marginTop:"20px"}}>
                                       When in doubt what to prepare, {recipe.title} is my go to. Easy and suited for every taste.
                                   </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                               </Card.Footer>
                           </Card></Col>
                           <Col><Card border="success">
                               <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.WBP-2lZcft0rU2SVQFSiBgHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                               <Card.Body >
                                   <Card.Title>Chef Heike Schutz</Card.Title>
                                   <Card.Subtitle>A Mano, Berlin</Card.Subtitle>
                                   <Card.Text style={{marginTop:"20px"}}>
                                       {recipe.title} is a dish that could be enjoyed in every part of the world. I simply love it!
                                   </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                               </Card.Footer>
                           </Card></Col>
                       </Row>
                   </Container>
                </div>
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

export default RecipeDetail;
