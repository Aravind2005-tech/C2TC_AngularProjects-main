import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = []; // Internal array to store items

  constructor() { }

  // Method to add an item
  addItem(item: string): void {
    this.items.push(item);
  }

  // Method to remove an item by index
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  // Method to get all items
  getItems(): string[] {
    return this.items;
  }
}
