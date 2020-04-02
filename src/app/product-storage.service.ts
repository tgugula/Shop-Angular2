import { Injectable } from '@angular/core';
import {Product} from './shop/products/Product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() {
  }

  private products: Product[] = [
    {id: 1, name: 'Product 1', price: 10.00, quantity: 1000, available: true},
    {id: 2, name: 'Product 2', price: 15.00, quantity: 999, available: false},
    {id: 3, name: 'Product 3', price: 13.00, quantity: 300, available: true},
  ];

  private idCount: number = 4;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

  /* private idCount: number = 4;*/
  saveProduct(product: Product) {
    if (product.id) {
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }
  }


  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]};
  }
}
