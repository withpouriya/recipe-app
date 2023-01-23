import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = (this.nameInputRef.nativeElement as HTMLInputElement).value
    const ingAmount = parseInt((this.nameInputRef.nativeElement as HTMLInputElement).value)
    const newIngredient = new Ingredient(
      ingName,
      ingAmount,
    )
    this.ingredientAdded.emit(newIngredient)
  }
}
