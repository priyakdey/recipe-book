import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './services/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.onIngredientAddEvent.subscribe(
      (ingredient: Ingredient) => {
        this.shoppingListService.onIngredientAdd(ingredient);
      }
    );
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
