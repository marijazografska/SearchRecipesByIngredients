import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState('');

    useEffect(() => {
        axios.get(`/api/recipes?ingredients=${ingredients}`)
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, [ingredients]);

    return (
        <div>
            <input
                type="text"
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                placeholder="Enter ingredients"
            />
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <a href={`/recipe/${recipe.id}`}>{recipe.title}</a>
                        <img src={recipe.image} alt={recipe.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
