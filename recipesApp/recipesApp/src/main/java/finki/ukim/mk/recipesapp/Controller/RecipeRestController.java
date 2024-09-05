package finki.ukim.mk.recipesapp.Controller;

import finki.ukim.mk.recipesapp.Model.Recipe;
import finki.ukim.mk.recipesapp.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeRestController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeRestController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<Recipe>> getRecipes(@RequestParam(required = false) String ingredients) {
        List<Recipe> recipes = recipeService.getRecipes(ingredients);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getRecipeInfo(@PathVariable int id) {
        Map<String, Object> recipeInfo = recipeService.getRecipeInfo(id);
        return ResponseEntity.ok(recipeInfo);
    }
}

