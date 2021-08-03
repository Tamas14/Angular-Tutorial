import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem(nameElement: HTMLInputElement, amountElement: HTMLInputElement) {
    const newIngredient = new Ingredient(nameElement.value, parseInt(amountElement.value));
    this.shoppingListService.addIngredient(newIngredient);
  }

}
