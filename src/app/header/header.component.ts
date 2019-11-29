import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    title = 'Recipe Book';
    @Output() navigationSelectedEvent: EventEmitter<string> = new EventEmitter<string>();

    onSelectShowRecipe() {
        this.navigationSelectedEvent.emit('recipe');
    }

    onSelectShowShoppingList() {
        this.navigationSelectedEvent.emit('shopping-list');
    }
}
