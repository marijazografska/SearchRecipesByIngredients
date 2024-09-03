package finki.ukim.mk.recipesapp.Service.Impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import finki.ukim.mk.recipesapp.Model.Ingredient;
import finki.ukim.mk.recipesapp.Model.Recipe;
import finki.ukim.mk.recipesapp.Service.RecipeService;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

import java.io.IOException;
import java.util.*;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Value("${spoonacular.api.key}")
    private String apiKey;

    private static final String API_KEY = "ebffef9e78ea49268f42f7fe5bf35fcf";
    private static final String URL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + API_KEY + "&ingredients=";
    private static final String RECIPE_INFO_URL = "https://api.spoonacular.com/recipes/{id}/information?apiKey={apiKey}";

    public List<Recipe> getRecipes(String ingredients) {
        List<Recipe> recipeList = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();
        String url = URL + ingredients;

        ResponseEntity<List> response = restTemplate.getForEntity(url, List.class);
        List<LinkedHashMap<String, Object>> recipes = response.getBody();

        if (recipes != null) {
            for (LinkedHashMap<String, Object> recipeData : recipes) {
                Recipe recipe = mapToRecipeModel(recipeData);
                if (recipe != null) {
                    recipeList.add(recipe);
                }
            }
        }
        return recipeList;
    }

    public Map<String, Object> getRecipeInfo(int id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = RECIPE_INFO_URL.replace("{id}", String.valueOf(id)).replace("{apiKey}", apiKey);

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        String responseBody = responseEntity.getBody();

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> recipeInfoMap = new HashMap<>();

        try {
            JsonNode rootNode = objectMapper.readTree(responseBody);
            String title = rootNode.path("title").asText();
            String instructions = rootNode.path("instructions").asText();
            String imageUrl = rootNode.path("image").asText();

            JsonNode ingredientsNode = rootNode.path("extendedIngredients");
            List<Ingredient> ingredientsList = new ArrayList<>();
            for (JsonNode ingredientNode : ingredientsNode) {
                String name = ingredientNode.path("name").asText();
                double amount = ingredientNode.path("amount").asDouble();
                String unit = ingredientNode.path("unit").asText();
                ingredientsList.add(new Ingredient(name, amount, unit));
            }

            recipeInfoMap.put("title", title);
            recipeInfoMap.put("instructions", instructions);
            recipeInfoMap.put("ingredients", ingredientsList);
            recipeInfoMap.put("imageUrl", imageUrl);

            return recipeInfoMap;
        } catch (IOException e) {
            e.printStackTrace();
            return Collections.singletonMap("error", "Error occurred while fetching recipe info");
        }
    }

    public Recipe mapToRecipeModel(LinkedHashMap<String, Object> recipeData) {
        int id = (int) recipeData.get("id");
        String title = (String) recipeData.get("title");
        String imageUrl = (String) recipeData.get("image");
        List<Ingredient> ingredients = mapIngredients((List<LinkedHashMap<String, Object>>) recipeData.get("usedIngredients"));

        return new Recipe(title, id, ingredients, imageUrl);
    }

    public List<Ingredient> mapIngredients(List<LinkedHashMap<String, Object>> ingredientsData) {
        List<Ingredient> ingredients = new ArrayList<>();
        if (ingredientsData != null) {
            for (LinkedHashMap<String, Object> ingredientData : ingredientsData) {
                String name = (String) ingredientData.get("name");
                double amount = (double) ingredientData.get("amount");
                String unit = (String) ingredientData.get("unit");
                ingredients.add(new Ingredient(name, amount, unit));
            }
        }
        return ingredients;
    }
}
