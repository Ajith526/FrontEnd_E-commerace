import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from 'src/app/Model/product';

import { ProductService } from 'src/app/Services/product.service';

import { FormBuilder, NgForm } from '@angular/forms';




@Component({

  selector: 'app-addproduct',

  templateUrl: './addproduct.component.html',

  styleUrls: ['./addproduct.component.css']

})

export class AddproductComponent implements OnInit {

  @ViewChild('productForm') productForm!: NgForm;




  newProduct: Product = {

    id: 0,

    name: '',

    price: 0,

    image: ''

  };




  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }




  ngOnInit(): void {

    // Initialize form controls if needed

  }




  addProduct(): void {

    if (this.productForm.valid) {

      this.productService.addProduct(this.newProduct).subscribe(product => {

        console.log('Product added:', product);

        this.newProduct = {

          id: 0,

          name: '',

          price: 0,

          image: ''

        };

        this.productForm.resetForm();

      });

    }

  }

}