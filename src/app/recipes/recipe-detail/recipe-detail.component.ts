import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddingToShoppingList(): void {
    this.recipeService.onAddingToShoppingList(this.recipe.ingredients);
  }

}
