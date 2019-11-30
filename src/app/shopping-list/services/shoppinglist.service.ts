import { Ingredient } from 'src/app/models/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    onIngredientAddEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }
    onIngredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}
