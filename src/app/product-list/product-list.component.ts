import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../app.module';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService, 
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addToCart(product) {
    if (product) {
      this.cartService.addToCart(product, 1); // Add 1 item by default
    }
  }

}
