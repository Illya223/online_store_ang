import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: { product: any, quantity: number }[] = [];
  total = 0;
  checkoutData = {
    name: '',
    address: '',
    card: ''
  };

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() : void{
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  console.log(2)
  }

  placeOrder() {
    // Implement order placement logic here
    console.log('Order placed');
  }

  onSubmit() {
    alert(`
    Customer Information:
    Name: ${this.checkoutData.name}
    Address: ${this.checkoutData.address}
    Credit Card: ${this.checkoutData.card}

    Order Details:
    ${this.cartItems.map(item => `${item.product.name} - ${item.product.price} x ${item.quantity}`).join('\n')}
    
    Total: ${this.total}
  `);
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
