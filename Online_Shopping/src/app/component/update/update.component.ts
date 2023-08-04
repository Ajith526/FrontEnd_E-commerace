// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productId!: number;
  product: Product = { id: 0, name: '', image: '', price: 0 }; // Initialize product with default values
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.productId = +idParam;
      this.getProduct(this.productId);
    } else {
      // Handle the case when the ID parameter is missing
      console.error('Product ID parameter is missing.');
      // You can redirect to another page or display an error message here
    }
  }

  getProduct(id: number): void {
    this.productService.getProductById(id)
    
      .subscribe(
        (product: Product) => {
          this.product = product;
        },
        (error: any) => {
          this.error = 'Error occurred while retrieving the product.';
          console.error(error);
        }
      );
  }

  // updateProduct(): void {
  //   this.productService.updateProduct(this.productId, this.product)
    
  //     .subscribe(
  //       (updatedProduct: Product) => {
  //         console.log('Product updated successfully:', updatedProduct);
  //         this.router.navigate(['/products']); // Navigate to the products list page
  //       },
  //       (error: any) => {
  //         this.error = 'Error occurred while updating the product.';
  //         console.error(error);
  //       }
  //     );
  // }
  updateProduct(): void {
    this.productService.updateProduct(this.productId, this.product)
      .subscribe(
        (updatedProduct: Product) => {
          console.log('Product updated successfully:', updatedProduct);
          this.router.navigate(['/products']); // Navigate to the products list page
        },
        (error: any) => {
          this.error = 'Error occurred while updating the product.';
          console.error(error);
        }
      );
  }
}
