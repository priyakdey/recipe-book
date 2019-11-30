import { Ingredient } from 'src/app/models/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    onIngredientAddEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }
    onIngredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // ES6 way to spread an array into individual elements
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
