import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shoppinglist.service';

@Injectable()
export class RecipeService {
  // Hold Dummy Data Stub
  private recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Ingredient 1', 10),
        new Ingredient('Ingredient 2', 5),
        new Ingredient('Ingredient 3', 6),
      ]),
    new Recipe('Recipe 2',
      'Description 2',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Ingredient 4', 10),
        new Ingredient('Ingredient 5', 5),
        new Ingredient('Ingredient 6', 6),
        new Ingredient('Ingredient 7', 3),
      ]),
    new Recipe('Recipe 3',
      'Description 3',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Ingredient 8', 10),
        new Ingredient('Ingredient 9', 5),
        new Ingredient('Ingredient 10', 6),
        new Ingredient('Ingredient 11', 6),
        new Ingredient('Ingredient 12', 6),
      ])

  ];
  // EventEmitter in an event of selecting a particular recipe
  selectedRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  // Holds the selected recipe data
  selectedRecipe: Recipe;

  constructor(public shoppingListService: ShoppingListService) { }

  getRecipesList() {
    return this.recipes.slice();
  }

  onAddingToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
