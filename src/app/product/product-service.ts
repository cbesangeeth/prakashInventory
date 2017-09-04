import { Injectable } from '@angular/core';

import { ProductBase } from './productBase';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Promise<ProductBase[]> {
    return Promise.resolve(PRODUCTS);
  }
}
