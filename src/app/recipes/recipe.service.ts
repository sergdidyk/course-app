//place where I manage the recipes

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
        
    private recipes: Recipe[] = [  
        new Recipe(
            'Burger Recipe', 
            'This is super tasty burger', 
            'https://chickencottage.com/wp-content/uploads/2015/07/veggie-burger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]), //вызываем конструктор  
        new Recipe(
            'Schnitzel Recipe', 
            'This is delicious schnitzel', 
            'https://richmeats.capetown/wp-content/uploads/2017/03/pork-schnitzel.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]) //вызываем конструктор  
    ]; 

    constructor(private shoppingListService: ShoppingListService) {}
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        //get a copy of recipes
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsTShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}