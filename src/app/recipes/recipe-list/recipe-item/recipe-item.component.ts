import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';

import { RecipeService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClickShowRecipeDetails() {
    this.recipeService.selectedRecipeEvent.emit(this.recipe);
  }

}
