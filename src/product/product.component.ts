import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { ConstantUtil } from './../util/const.util';
import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent  implements OnInit{

  public contact = {};

  public productByCategory = [];

  public productLazyLoading = [];

  public categoryDetail = {};

  public counter: number;

  public IMAGE_META_DATA = ConstantUtil.FULL_IMAGE_META_DATA;

  constructor(private contactService: ContactService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    ) {
      // $('meta[name=url]').remove();
      // $('meta[name=title]').remove();
      // $('meta[name=description]').remove();
      // $('meta[name=image]').remove();
      // $('meta[name=image_width]').remove();
      // $('meta[name=image_height]').remove();

      // this.meta.setTitle('abc');
      // this.meta.setTag('og:url', 'http://bideptrai.com/category/2' );
      // this.meta.setTag('og:title', 'abcd');
      // this.meta.setTag('og:description', 'bcde');
      // this.meta.setTag('og:image', 'http://bideptrai.com/assets/images/category/No6-01.jpg');
      // this.meta.setTag('og:image:width', '300');
      // this.meta.setTag('og:image:height', '200');

      this.counter = 0;
  }

  ngOnInit() {
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
          // this.loadMetaData();
        }
      })
      this.productService.getProductByCategoryId(id).subscribe(res => {
        this.productByCategory = res.json();
        this.getProductLazy();
      }, error => {
        console.log('error when getting product by category');
      });
    })
  }

  public getProductLazy() {
    for(let i = this.counter; i<this.productByCategory.length;i++)
    {
      this.productLazyLoading.push(this.productByCategory[i]);
      if(i!= 0 && (i+1)%6 == 0) break;
    }
    this.counter+=6;
  }

  public trackByFn(index, item) {
    debugger;
      return index; // or item.id
  }

  private loadMetaData() {
    // $('head').append('<meta name="url" property="og:url" content="http://bideptrai.com/category/' + this.categoryDetail['id'] + '">');
    // $('head').append('<meta name="title" property="og:title" content="' + this.categoryDetail['name'] + '">');
    // $('head').append('<meta name="description" property="og:description" content="' + this.categoryDetail['description'] + '">');
    // $('head').append('<meta name="image" property="og:image" content="http://bideptrai.com/assets/images/category/' + this.categoryDetail['image'] + '">');
    // $('head').append('<meta name="image_width" property="og:image:width" content="300">');
    // $('head').append('<meta name="image_height" property="og:image:height" content="200">');
    // this.meta.setTitle(this.categoryDetail['name']);
    // this.meta.setTag('og:url', 'http://bideptrai.com/category/' + this.categoryDetail['id']);
    // this.meta.setTag('og:title', this.categoryDetail['name']);
    // this.meta.setTag('og:description', this.categoryDetail['description']);
    // this.meta.setTag('og:image', 'http://bideptrai.com/assets/images/category/' + this.categoryDetail['image']);
    // this.meta.setTag('og:image:width', '300');
    // this.meta.setTag('og:image:height', '200');
    
  }
}
