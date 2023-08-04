import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../Model/cart';
import { order } from '../Model/order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  private apiUrl = 'http://localhost:8083/api/orders'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<order[]> {
    return this.http.get<order[]>(this.apiUrl);
  }
  private BASE_URL = 'http://localhost:8083/api/orders'; // Replace with your backend API URL

  

  placeOrder(orderItems: CartItem[]): Observable<any> {
    const url = `${this.BASE_URL}/orders`;
    return this.http.post(url, { items: orderItems });
  }
}
