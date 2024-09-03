package finki.ukim.mk.recipesapp.Service.Impl;

import finki.ukim.mk.recipesapp.Model.Exceptions.InvalidIngredientId;
import finki.ukim.mk.recipesapp.Model.Ingredient;
import finki.ukim.mk.recipesapp.Repository.IngredientRepository;
import finki.ukim.mk.recipesapp.Service.IngredientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImpl implements IngredientService {
private final IngredientRepository ingredientRepository;

    public IngredientServiceImpl(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

}
