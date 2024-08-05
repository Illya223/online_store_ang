import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './app.module';
import { Product } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product, quantity: number) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
    this.cartItemsSubject.next(this.cartItems);
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

 

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }


  constructor() { }
}
