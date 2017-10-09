import { Component, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product;
  public showModal: boolean;
  constructor() { }
  ngAfterViewInit() {
  }

  showProductInfor() {
    this.showModal = true;
  }

}
