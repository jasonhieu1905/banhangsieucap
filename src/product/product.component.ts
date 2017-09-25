import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { ConstantUtil } from './../util/const.util';
import { ContactService } from './../service/contact.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  private contact = {};

  private productByCategory = [];

  constructor(private contactService: ContactService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.contactService.getAllContact().subscribe(res => {
      this.contact = res.json()[0];
    }, error => {
      console.log('error when getting contact');
    });
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.productService.getProductByCategoryId(id).subscribe(res => {
        this.productByCategory = res.json();
      }, error => {
        console.log('error when getting product by category');
      });
    });
  }


}
