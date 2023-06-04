import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductFacade } from 'src/app/store/product/product.facade';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  constructor(private productFacade: ProductFacade) {}

  @Input() uniqueProduct: any;
  ngOnInit() {
    
  }
  ngOnChanges() {
    console.log(this.uniqueProduct)
  }
}
