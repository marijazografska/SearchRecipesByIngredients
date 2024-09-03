package finki.ukim.mk.recipesapp.Model;
import lombok.*;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class Recipe {

    private String title;
    private int id;
    private List<Ingredient> ingredients;
    private String imageUrl;

    private String instructions;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Recipe(String title, int id, List<Ingredient> ingredients, String imageUrl) {
        this.title = title;
        this.id = id;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
    }

    public Recipe(String title, int id, List<Ingredient> ingredients) {
        this.title = title;
        this.id = id;
        this.ingredients = ingredients;
    }
      @Override
    public String toString() {
        return "Recipe{" +
                "title='" + title + '\'' +
                ", id=" + id +
                ", ingredients=" + ingredients +
                '}';
    }
}