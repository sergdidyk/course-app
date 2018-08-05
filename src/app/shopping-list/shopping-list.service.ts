import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingreadientListChanged = new Subject<Ingredient[]>(); // событие эмитирует массив ингредиентов
    startedEditing = new Subject<number>();

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5), 
        new Ingredient('Tomatoes', 10),
    ];


   getIngredients() {
       return this.ingredients.slice();
   }

   getIngerdient(index: number) {
       return this.ingredients[index];
   }

   addIngredient(ingredient: Ingredient) {
       this.ingredients.push(ingredient);
       this.ingreadientListChanged.next(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
    //  for(let ingredient of ingredients) {
    //      this.addIngredient(ingredient);
    //  }
    this.ingredients.push(...ingredients); //spread operator ES6
    this.ingreadientListChanged.next(this.ingredients.slice());
   }

   updateIngerdient(index: number, newIngerdient: Ingredient) {
       this.ingredients[index] = newIngerdient;
       this.ingreadientListChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number) {
       this.ingredients.splice(index, 1);
       this.ingreadientListChanged.next(this.ingredients.slice());
   }
}