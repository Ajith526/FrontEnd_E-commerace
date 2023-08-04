import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/app/Model/cart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  popupVisible: boolean = false;
  showPopup!: boolean;


  constructor(private dialog: MatDialog, private cartService: CartService,private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotal();
  }

  handleOrderConfirmation() {
    this.createOrder();
    this.closePopupAndNavigateToOrder();
  }
  loadCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (cartItems: CartItem[]) => {
        this.cartItems = cartItems;
        this.calculateTotal();
      },
      (error: any) => {
        console.error('Failed to retrieve cart items', error);
      }
    );
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.calculateTotal();
      },
      (error: any) => {
        console.error('Failed to remove item from cart', error);
      }
    );
    window.location.reload();
  } 

  private calculateTotal(): void {
    this.total = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  openPopup(): void {
    this.popupVisible = true;
  }
  

  closePopupAndNavigateToOrder() {
    // Close the popup (you can implement your close logic here)
    this.showPopup = false;
  
    // Navigate to the order component
    this.router.navigate(['/order']); // Replace '/order' with the actual route to your order component
  }
  
  createOrder() {
    // Implement the logic to create an order here
    this.cartService.createOrder().subscribe(
      (response) => {
        // Handle the success response from the service
        console.log('Order created successfully:', response);
      },
      (error) => {
        // Handle any errors that occurred during the API call
        console.error('Error creating order:', error);
      }
    );
  }
}
