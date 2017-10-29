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

  public contact = {};

  public productByCategory = [];

  public categoryDetail = {};

  public IMAGE_META_DATA = ConstantUtil.FULL_IMAGE_META_DATA;

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
 

    this.route.queryParams.subscribe(params=> {
      let id = +params['id'];
      this.categoryService.getCategoryById(id).subscribe(res => {
        if(res) {
          this.categoryDetail = res.json()[0];
          this.IMAGE_META_DATA += this.categoryDetail['image'];
        }
      })
      this.productService.getProductByCategoryId(id).subscribe(res => {
        this.productByCategory = res.json();
      }, error => {
        console.log('error when getting product by category');
      });
    })
  }


}
