import { EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

export class RecipeService {
  // Hold Dummy Data Stub
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Description 1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Recipe 2', 'Description 2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Recipe 3', 'Description 3', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  // EventEmitter in an event of selecting a particular recipe
  selectedRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  // Holds the selected recipe data
  selectedRecipe: Recipe;

  getRecipesList() {
    return this.recipes.slice();
  }
}
