import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import {Button, Container, Nav, Navbar,Col,Row, Card, CardImg} from "react-bootstrap";
import './Design.css';
import RecipeDetail from "../Recipe/RecipeDetail";

const Search = () => {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInitiated, setSearchInitiated] = useState(false);
    const navigate = useNavigate();

    const fetchRecipes = () => {
        setLoading(true);
        fetch(`/api/recipes?ingredients=${ingredients}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                setLoading(false);
            });
    };

    const handleInputChange = (event) => {
        setIngredients(event.target.value);
    };

    const handleSearchClick = () => {
        fetchRecipes()
        setSearchInitiated(true);;
    };
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
            <div className="background-section-no-fog" >
            <Navbar className="navbar-transparent bg-body-tertiary justify-content-between ms-1" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand onClick={HomePageNav}>
                        <img
                            src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                            width="146"
                            height="36"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="justify-content-end ms-1">
                        <Nav.Link onClick={HomePageNav} style={{color:"white"}} className="navlink">Home</Nav.Link>
                        <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">Search</Nav.Link>
                        <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">About us</Nav.Link>
                        <Nav.Link onClick={handleSearchPageRedirect} style={{color:"white"}} className="navlink">Contact</Nav.Link>
                        <Button variant="outline-light" size="lg" onClick={PremiumNav}>Premium</Button>{' '}
                    </Nav>
                </Container>
            </Navbar>
            <div className="overlay-text" style={{
                backgroundColor: '#5ab963',
                height: '75vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                textAlign: 'center',
            }}>
                <input
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter your ingredients here..."
                    className="input-field"
                />
                <br/>
                <br/>
                <Button variant="dark" size="lg" onClick={handleSearchClick} className="search-button">Search</Button>{' '}
                <h1 className="utilize-title libre-franklin-semibold">UTILIZE YOUR <br/>KITCHEN <br/>PANTRY</h1>

            </div>
            </div>
            <div className="content-section">
                    <div className="text-start container">
                        <Container >
                            <Row>
                                <Col>
                                    <img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a68_image-row-01.jpg"/>
                                </Col>
                                <Col>
                                    <p className="libre-franklin-24" style={{fontSize:'26px'}}>We recommend...</p>
                                    <br/>
                                    {!searchInitiated?(
                                        <p className="libre-franklin-light" style={{fontSize:"23px"}}>On Spoon, you can easily search for delicious recipes by the ingredients you have on hand. Simply enter your ingredients, and we'll suggest a variety of meal ideas tailored to your pantry. Whether you're looking for something quick, healthy, or indulgent, our search feature will help you discover the perfect recipe to match your cravings. Happy cooking!</p>
                                    ):
                                      (recipes.slice(0, Math.ceil(recipes.length / 2)).map((recipe) => (
                                        <div key={recipe.id}>
                                            <h3>
                                                <ul>
                                                <li><Link to={`/recipes/${recipe.id}/info`} className="recipe-links">
                                                    {recipe.title}
                                                </Link></li>
                                                </ul>
                                            </h3>
                                        </div>
                                    )))}
                                </Col>
                            </Row>

                        </Container>
                    </div>
                <div className="content-section">
                    <div className="text-start-container">
                        <Container>
                            <Row>
                                <Col>
                                    <p className="libre-franklin-24" style={{fontSize:'26px'}}> Our chefs choices: </p>
                                    <br/>
                                    {!searchInitiated?(
                                            <p className="libre-franklin-light" style={{fontSize:"23px"}}>Spoon is enriched with recipes contributed by talented chefs from around the world. These culinary experts share their best creations, offering you a diverse selection of dishes to explore and enjoy. With professional tips and unique recipes, you'll always have something new and exciting to try in your kitchen.</p>):
                                        (recipes.slice(Math.ceil(recipes.length / 2)).map((recipe) => (
                                        <div key={recipe.id}>
                                            <h3>
                                                <ul>
                                                    <li><Link to={`/recipes/${recipe.id}/info`} className="recipe-links">
                                                        {recipe.title}
                                                    </Link></li>
                                                </ul>
                                            </h3>
                                        </div>
                                    )))}
                                </Col>
                                <Col>
                                    <img src="https://www.oggi.it/cucina/wp-content/uploads/sites/19/2018/07/pasta-470x330.jpg"/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <Card className="bg-dark text-white" style={{border:"none"}}>
                        <Card.Img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6c_image-premium-banner.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                                            <Card style= {{width: '20rem', height: '60vh', backgroundColor: '#5ab963', color: 'white', borderRadius:"0", border:"none", boxShadow: '0 4px 8px rgba(0,0,0,0.2)', padding: '20px', textAlign: 'center' }} >
                                                <Card.Body className="d-flex flex-column justify-content-center">
                                                    <Card.Subtitle className="mb-5 mt-0 libre-franklin-semibold" style={{  marginTop:"5px",textAlign: 'left' }}><b>Go Premium</b></Card.Subtitle>
                                                    <Card.Text className="libre-franklin-light" style={{  lineHeight: '1.5' ,textAlign: 'left', color:'white',fontSize:'15px'}}>
                                                        <div style={{display:'inline-block'}} className="libre-franklin-semibold">Join our Premium community and unlock unlimited number of recipes per day.</div> <br/>Explore the large horizon of textures and flavours recommended by our top chefs!
                                                    </Card.Text>
                                                    <Button variant="light" size="lg" style={{marginTop:"20px", fontSize:"16px"}} className="libre-franklin-24" onClick={PremiumNav}>Unlock Premium</Button>{' '}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>

                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
            <footer className="footer py-3 " style={{marginTop:"-150px"}}>
                <Container>
                    <Row className="mt-5" >
                        <Col className="custom-col">
                            <img
                                src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a54_logo-spoon-white.svg"
                                width="126"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                onClick={HomePageNav}
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
    );
};
export default Search;