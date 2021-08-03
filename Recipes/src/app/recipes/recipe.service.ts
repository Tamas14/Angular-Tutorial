import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Paprikás krumpli',
      'Ez a recept a hagyományos paprikás krumpli elkészítését',
      'https://www.mindmegette.hu/images/230/L/lead_L_crop_201811101023_img_4216.jpg',
      [
        new Ingredient('Hagyma', 2),
        new Ingredient('Kolbász', 2),
        new Ingredient('Pirospaprika', 1),
        new Ingredient('Burgonya', 1),
        new Ingredient('Paradicsompüré', 1)
      ]),
    new Recipe('Palacsinta',
      'A tökéletes alap recept – Hagyományos palacsinta',
      'https://pampuska.com/wp-content/uploads/2020/08/palacsinta_szoda_nelkul.jpg',
      [
        new Ingredient('Liszt', 1),
        new Ingredient('Tojás', 2),
        new Ingredient('Tej', 1),
        new Ingredient('Szóda', 1),
        new Ingredient('Étolaj', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  getRecipes(){
    return this.recipes.slice(); //will return a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }



}
