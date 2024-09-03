package finki.ukim.mk.recipesapp.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import finki.ukim.mk.recipesapp.Model.Ingredient;
import finki.ukim.mk.recipesapp.Model.Recipe;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.*;

public interface RecipeService {
    List<Recipe> getRecipes(String ingredients);

    Map<String, Object> getRecipeInfo(int id);

    Recipe mapToRecipeModel(LinkedHashMap<String, Object> recipeData);

    List<Ingredient> mapIngredients(List<LinkedHashMap<String, Object>> ingredientsData);
}