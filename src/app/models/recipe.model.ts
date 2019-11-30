import { Ingredient } from './ingredient.model';

export class Recipe {
    constructor(public name: string,
                public description: string,
                public imageURL: string,
                public ingredients: Ingredient[]) { }

}
