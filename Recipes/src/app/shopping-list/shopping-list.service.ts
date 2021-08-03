import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(Object.assign({}, ingredient));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      //ez az object
      // @ts-ignore
      let elementIndex = this.ingredients.findIndex((ingredientElem: Ingredient, index: Number)=>{
        if(ingredientElem.name === ingredient.name){
          return true;
        }
      });

      if(elementIndex !== -1){
        this.ingredients[elementIndex].amount += ingredient.amount;
      } else {
        this.ingredients.push(Object.assign({}, ingredient));
      }
    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  constructor() { }
}
