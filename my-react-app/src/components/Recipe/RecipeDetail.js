import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App/Design.css';
import {Button, Container, Nav, Navbar, Row, Col} from "react-bootstrap";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

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
                <div className="overlay-text recipe-title " style={{textAlign:"left", marginBottom:"0", marginLeft:"20px"}}>
                    <h1><b>{recipe.title}</b></h1>
                </div>
            </div>

        <div>
            <div className="content-section" style={{marginBottom:"50"}}>
                <div className="text-start container">
                    <Container>
                        <Row>
                            <Col className="align-bottom">
            <img src={recipe.imageUrl} alt={recipe.title} />
                            </Col>
                            <Col style={{marginLeft:"5vw"}}>
            <h2 className="libre-franklin-24 mb-5" style={{fontSize:"22px"}}>Ingredients</h2>
            <ul className="libre-franklin-light " style={{fontSize:"20px", listStyle:"none"}}>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                ))}
            </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="content-section" style={{marginTop:"0"}}>
                <div className="text-start container">
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default RecipeDetail;
