import { Component, OnInit } from '@angular/core';

import { IProduct } from './product'

@Component({
  templateUrl: './product-detail.component',
  styleUrls: ['./product-detail.component']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = 'Product Detail View';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
