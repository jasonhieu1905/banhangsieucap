import { CategoryService } from './../service/category.service';
import { ConstantUtil } from './../util/const.util';
import { ContactService } from './../service/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private contact = {};
  private category_url = ConstantUtil.CATEGORY_UPLOAD;

  private categories = [];

  constructor(private contactService: ContactService, private categoryService: CategoryService){}
  
  ngOnInit() {
      this.contactService.getAllContact().subscribe(res => {
        this.contact = res.json()[0];
      },error => {
        console.log('error when getting contact');
      });
      
      this.categoryService.getAllContact().subscribe(res => {
        this.categories = res.json();
      },error => {
        console.log('error when getting category');
      });
  }
}
