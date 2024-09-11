import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import RecipeList from './Search'
import RecipeDetail from "../Recipe/RecipeDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default home page */}
                <Route path="/search" element={<RecipeList />} /> {/* Search page */}
                <Route path="/recipes/:id/info" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
};
/*
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
            </header>
        </div>
    );
};
*/
export default App;

