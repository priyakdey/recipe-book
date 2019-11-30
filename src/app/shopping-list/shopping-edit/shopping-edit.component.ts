import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  onAddItem() {
    if (this.nameInputRef.nativeElement.value !== '' && this.amountInputRef.nativeElement.value !== '') {
      const ingredient: Ingredient = {
        name: this.nameInputRef.nativeElement.value,
        amount: this.amountInputRef.nativeElement.value
      };
      this.shoppingListService.onIngredientAddEvent.emit(ingredient);
    }
  }

}
