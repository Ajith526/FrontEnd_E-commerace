import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Observer, throwError } from 'rxjs';
import { CartItem } from '../Model/cart';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private orderApiUrl = 'http://localhost:8083/api/orders/all';
  cartItems: CartItem[] = [];

  constructor(private http: HttpClient) { }
  addToCart(product: any): void {
    console.log(product.id);
    for (const item of this.cartItems) {
      
      console.log(item);
    }
    const existingItem = this.cartItems.find(item => item.id === product.id);

    console.log(this.cartItems);
    if (existingItem) {
      existingItem.quantity += 1;
      this.saveCart(existingItem); // Call saveCart with the updated existing item
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      this.cartItems.push(newItem);
      this.saveCart(newItem); // Call saveCart with the new item
    }
  }
  
  saveCart(cartItem: CartItem): void {
    const observer: Observer<any> = {
      next: response => {
        console.log('Item added to cart successfully');
        this.updateCartItems(); // Update the cart items array after successful save
      },
      error: error => {
        console.error('Failed to add item to cart', error);
      },
      complete: () => {
        // Optional: Add any logic to execute when the operation is complete
      }
    };
  
    this.http.post('http://localhost:8081/api/cart/items', cartItem).subscribe(observer);
  }
  
  updateCartItems(): void {
    this.getCartItems().subscribe(
      cartItems => {
        this.cartItems = cartItems; // Update the cartItems array with the updated data
      },
      error => {
        console.error('Failed to retrieve cart items', error);
      }
    );
  }
  


  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>('http://localhost:8081/api/cart/items');
  }

  getTotalPrice(): Observable<number> {
    return this.getCartItems().pipe(
      map(cartItems => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      })
    );
  }
  

  removeFromCart(productId: number): Observable<any> {
    const index = this.cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Remove item from the cart
    }
    // Send a DELETE request to the API endpoint to remove the item from the cart in the database
    return this.http.delete(`http://localhost:8081/api/cart/remove/${productId}`).pipe(
      catchError((error) => {
        console.error('Failed to remove item from cart', error);
        return throwError('Failed to remove item from cart');
      })
    );
  }
  createOrder(): Observable<any> {
    const orderItems = this.cartItems.map(cartItem => {
      return {
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
        product: cartItem.image,
        quantity: cartItem.quantity
      };
    });
  
    const orderPayload = {
      cartItems: orderItems
    };
  
    return this.http.post<any>(this.orderApiUrl, orderPayload).pipe(
      catchError((error) => {
        console.error('Failed to create order', error);
        return throwError('Failed to create order');
      })
    );
  }
  
}



// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:8082/api/cart/add'; // Update with your backend API URL

//   cartItems: CartItem[] = [];

//   constructor(private http: HttpClient) { }

//   addToCart(product: any): void {
//     const existingItem = this.cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       const newItem: CartItem = {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         quantity: 1
//       };
//       this.cartItems.push(newItem);
//       // this.saveCart(product);
//     }
//   }

//   removeFromCart(productId: number) {
//     const index = this.cartItems.findIndex(item => item.id === productId);
//     if (index !== -1) {
//       this.cartItems.splice(index, 1); // Remove item from the cart
//     }
//   }

//   getCartItems(): CartItem[] {
//     return this.cartItems;
//   }

//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   }

//   clearCart() {
//     this.cartItems = [];
//   }
//   saveCart(product:Product){
//     console.log(product);
//     return this.http.post(`${this.apiUrl}`, product);
//   }
// }

