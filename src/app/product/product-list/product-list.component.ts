import { Component, OnInit } from '@angular/core';

import { ProductBase } from './../productBase';
import { ProductService } from './../product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductBase[];
  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

}
