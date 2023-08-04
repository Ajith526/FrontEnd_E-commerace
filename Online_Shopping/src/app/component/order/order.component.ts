import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/Model/order';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderItems: order[] = [];

  constructor(private orderService: OrderService,private cartService: CartService) {}

  ngOnInit() {
    this.loadOrderData();
  };
  

  loadOrderData() {
    this.orderService.getOrderItems().subscribe(
      (data) => {
        // Assuming your backend returns an array of orders
        this.orderItems = data;
      },
      (error) => {
        console.error('Failed to fetch order data:', error);
      }
    );
  }


  createOrder(): void {
    this.cartService.createOrder().subscribe(
      response => {
        console.log('Order created successfully');
        // Do something with the response if needed
      },
      error => {
        console.error('Failed to create order', error);
        // Handle error scenario
      }
    );
  }
}