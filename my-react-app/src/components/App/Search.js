import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Button, Container, Nav, Navbar,Col,Row} from "react-bootstrap";
import './Design.css';
import RecipeDetail from "../Recipe/RecipeDetail";



const Search = () => {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInitiated, setSearchInitiated] = useState(false);

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

    return (
        <div>
            <div className="background-section-no-fog" >
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
            <div className="overlay-text">
                <p className="ibm-plex-mono-regular">Enter your ingredients here:</p>
                <input
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter ingredients..."
                    className="input-field"
                />
                <br/>
                <br/>
                <Button variant="dark" size="sm" onClick={handleSearchClick}>Search</Button>{' '}

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
                                    {!searchInitiated?(
                                        <p>Please enter ingredients and click search to see recipes.</p>
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
                                    <p className="libre-franklin-24" style={{fontSize:'26px'}}> chef's choice ...</p>
                                    {!searchInitiated?(
                                            <p>Please enter ingredients and click search to see recipes.</p>):
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
                    <img src="https://cdn.prod.website-files.com/66d47171e73000e1183f49d9/66d47171e73000e1183f4a6c_image-premium-banner.jpg"/>
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
};
export default Search;