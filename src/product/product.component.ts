import { CategoryService } from './../service/category.service';
import { ConstantUtil } from './../util/const.util';
import { ContactService } from './../service/contact.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private contact = {};

  constructor(private contactService: ContactService,
    private categoryService: CategoryService,
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
      console.log(id);
    });
  }

  
}
