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
    $('meta[name=url]').remove();
    $('meta[name=title]').remove();
    $('meta[name=description]').remove();
    $('meta[name=image]').remove();
    $('meta[name=image_width]').remove();
    $('meta[name=image_height]').remove();

    this.contactService.getAllContact().subscribe(res => {
      this.contact = res.json()[0];
    }, error => {
      console.log('error when getting contact');
    });
 

    this.route.params.subscribe(params=> {
      let id = +params['id'];
      this.categoryService.getCategoryById(id).subscribe(res => {
        if(res) {
          this.categoryDetail = res.json()[0];
          this.IMAGE_META_DATA += this.categoryDetail['image'];
          this.loadMetaData();
        }
      })
      this.productService.getProductByCategoryId(id).subscribe(res => {
        this.productByCategory = res.json();
      }, error => {
        console.log('error when getting product by category');
      });
    })
  }

  private loadMetaData() {
    $('head').append('<meta name="url" property="og:url" content="http://bideptrai.com/category/' + this.categoryDetail['id'] + '">');
    $('head').append('<meta name="title" property="og:title" content="' + this.categoryDetail['name'] + '">');
    $('head').append('<meta name="description" property="og:description" content="' + this.categoryDetail['description'] + '">');
    $('head').append('<meta name="image" property="og:image" content="http://bideptrai.com/assets/images/category/' + this.categoryDetail['image'] + '">');
    $('head').append('<meta name="image_width" property="og:image:width" content="300">');
    $('head').append('<meta name="image_height" property="og:image:height" content="200">');

  }
}
