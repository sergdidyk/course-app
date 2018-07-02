import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingreadientListChanged = new EventEmitter<Ingredient[]>(); // событие эмитирует массив ингредиентов

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5), 
        new Ingredient('Tomatoes', 10),
    ];


   getIngredients() {
       return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient) {
       this.ingredients.push(ingredient);
       this.ingreadientListChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
    //  for(let ingredient of ingredients) {
    //      this.addIngredient(ingredient);
    //  }
    this.ingredients.push(...ingredients); //spread operator ES6
    this.ingreadientListChanged.emit(this.ingredients.slice());
   }
}