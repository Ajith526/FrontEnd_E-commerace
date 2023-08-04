import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    image: ''
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // addProduct(): void {
  //   this.productService.addProduct(this.newProduct).subscribe(product => {
  //     this.products.push(product);
  //     this.newProduct = {
  //       id: 0,
  //       name: '',
  //       price: 0,
  //       image: ''
  //     };
  //   });
  }

  // deleteProduct(productId: number): void {
  //   this.productService.deleteProduct(productId).subscribe(() => {
  //     this.products = this.products.filter(product => product.id !== productId);
  //   });
  // }


