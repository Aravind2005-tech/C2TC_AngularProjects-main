import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { ItemService } from './item.service'; // Import the service

@Component({
  selector: 'app-root',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './app.component.html', // Link to the HTML template
  styleUrls: ['./app.component.css'] // Link to the CSS styles (optional)
})
export class AppComponent {
  newItem: string = ''; // Property to bind to the input field
  items: string[] = []; // Property to hold the list of items

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems(); // Initialize the item list using the service
  }

  // Method to add a new item
  addItem(): void {
    if (this.newItem) {
      this.itemService.addItem(this.newItem);
      this.newItem = ''; // Clear the input field after adding
    }
  }

  // Method to remove an item
  removeItem(index: number): void {
    this.itemService.removeItem(index);
  }
}
