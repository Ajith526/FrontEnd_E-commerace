import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8082/api/products');

  }




  getProductById(id: number): Observable<Product> {

    const url = `http://localhost:8082/api/products/${id}`;

    return this.http.get<Product>(url);

  }

 




  addProduct(product:Product):Observable<Product>{

return this.http.post<Product>('http://localhost:8082/api/products',product)




  }




  updateProduct(id:number, product: Product): Observable<Product> {

    return this.http.put<Product>(`http://localhost:8082/api/products/${product.id}`, product);

  }

 

}


