import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../components/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('1 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('2 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
    new Recipe('3 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', []),
    new Recipe('4 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', []),
    new Recipe('5 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', []),
    new Recipe('6 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', []),
    new Recipe('7 Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg', []),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
