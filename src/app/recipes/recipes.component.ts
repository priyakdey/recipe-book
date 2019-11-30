import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';

import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipeEvent.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
    
  }

}
