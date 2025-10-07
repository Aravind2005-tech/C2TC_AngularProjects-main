// src/app/app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', price: 0 };
  editProduct: Product | null = null;

  constructor(private productService: ProductService) 
  {
    this.products = this.productService.getProducts();
  }

  // Add a new product
  addProduct(): void 
  {
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', price: 0 }; // Reset form
  }

  // Delete a product by ID
  deleteProduct(productId: number): void 
  {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getProducts(); // Update the list
  }

  // Select a product for editing
  edit(product: Product): void 
  {
    this.editProduct = { ...product };
  }

  // Update the selected product
  updateProduct(): void 
  {
    if (this.editProduct) {
      this.productService.updateProduct(this.editProduct);
      this.editProduct = null;
    }
  }

  // Cancel the edit
  cancelEdit(): void 
  {
    this.editProduct = null;
  }
}
