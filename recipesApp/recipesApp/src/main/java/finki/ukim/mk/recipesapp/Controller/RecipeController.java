package finki.ukim.mk.recipesapp.Controller;

import finki.ukim.mk.recipesapp.Model.Recipe;
import finki.ukim.mk.recipesapp.Service.Impl.RecipeServiceImpl;
import finki.ukim.mk.recipesapp.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeServiceImpl recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public String getRecipes(@RequestParam(required = false) String ingredients,
                             Model model) {
        if (ingredients != null && !ingredients.isEmpty()) {
            List<Recipe> recipes = recipeService.getRecipes(ingredients);
            model.addAttribute("recipes", recipes);
        }
        return "recipes";
    }

    @GetMapping("/{id}/info")
    public String getRecipeInfo(@PathVariable int id, Model model) {
        Map<String, Object> recipeInfo = recipeService.getRecipeInfo(id);
        model.addAllAttributes(recipeInfo);
        return "recipe-info";
    }
}