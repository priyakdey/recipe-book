import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

import { RecipeService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipesList();
  }

}
