import { CategoryService } from './../service/category.service';
import { ConstantUtil } from './../util/const.util';
import { ContactService } from './../service/contact.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private contactService: ContactService, 
    private categoryService: CategoryService,
    private route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
       let id = +params['id']; 
       console.log(id);
   });
  }
}
