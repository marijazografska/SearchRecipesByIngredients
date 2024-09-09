import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
            <h1>{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetail;
