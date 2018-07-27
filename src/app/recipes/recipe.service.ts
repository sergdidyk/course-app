//place where I manage the recipes

import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    //public property
    recipeSelected = new EventEmitter<Recipe>();

    //private - can't access this property outside
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
}