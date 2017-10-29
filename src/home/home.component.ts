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

  public contact = new Contact();
  public category_url = ConstantUtil.CATEGORY_UPLOAD;

  public categories = [];

  public image_metadata_url = "http://bideptrai.com/assets/images/meta_home.jpeg";

  constructor(private contactService: ContactService, private categoryService: CategoryService){}
  
  ngOnInit() {
      this.contactService.getAllContact().subscribe(res => {
        this.contact =  <Contact>(res.json()[0]);
      },error => {
        console.log('error when getting contact');
      });
      
      this.categoryService.getAllCategories().subscribe(res => {
        this.categories = res.json();
      },error => {
        console.log('error when getting category');
      });
  }
}

class Contact {
  public id: string;
  public title1: string;
  public introduction1: string;
  public introduction2: string;
  public phone1: string;
  public phone2: string;
  public email: string;
  public slogan: string;
}
 
