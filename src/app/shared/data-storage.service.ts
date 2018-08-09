import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";

@Injectable()
export class DataStorageService {
    dbUrl = 'https://ng-recipe-book-99e18.firebaseio.com/';

    constructor(private http: Http,
                private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.dbUrl + 'recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get(this.dbUrl + 'recipes.json')
                .pipe(map(
                    (response: Response) => {
                        const recipes: Recipe[] = response.json();
                        for (let recipe of recipes) {
                            if(!recipe['ingredients']) {
                                console.log(recipe);
                                recipe['ingredients'] = [];
                            }
                        }
                        return recipes;
                    }
                ))
                .subscribe(
                    (recipes: Recipe[]) => {
                        this.recipeService.setRecipes(recipes);
                    }
                );
    }
}