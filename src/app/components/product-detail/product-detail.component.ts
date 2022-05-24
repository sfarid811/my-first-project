import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Products} from '../../hero';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product : Products;
  
  @Output() onDeleteProduct: EventEmitter<Products> = new EventEmitter();


  constructor() { }
  
  ngOnInit(): void {
  }

  onDelete(product : Products) {
    this.onDeleteProduct.emit(product);
  }

}
