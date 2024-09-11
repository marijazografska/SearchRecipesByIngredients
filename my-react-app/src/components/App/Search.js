import React, {useState} from "react";
import './Design.css'; // Import your custom CSS
import {Link} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const RecipeList = () => {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

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
        fetchRecipes();
    };

    return (
        <div className="App">
            <div className="background-section-no-fog" style={{background:"#5ab963"}}>
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
                <div className="overlay-title">

                </div>


                </div>

                {/*
            <header className="App-header">
                <h2>Search Recipes by Ingredients</h2>
                <input
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter ingredients..."
                />
                <button onClick={handleSearchClick}>Search</button>
                {loading && <p>Loading...</p>}
                <div className="recipes-list">
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <div key={recipe.id}>
                                <h3>
                                    <Link to={`/recipes/${recipe.id}/info`}>
                                        {recipe.title}
                                    </Link>
                                </h3>
                            </div>
                        ))
                    ) : (
                        !loading && <p>No recipes found.</p>
                    )}
                </div>
            </header> */}
            </div>

    );
};
export default RecipeList;