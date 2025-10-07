// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'mousepad', price: 100 },
    { id: 2, name: 'mouse', price: 200 },
  ];

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Add a new product
  addProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  // Delete a product by ID
  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  // Update an existing product
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);// no matches id found then returns -1 to index
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
