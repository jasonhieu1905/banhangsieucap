import { ProductAdminImageModule } from './../product_image/product-admin-image.module';
import { CategoryAdminImageModule } from './../category_image/category-admin-image.module';
import { ProductAdminModule } from './../product/product-admin.module';
import { ContactAdminModule } from './../contact/contact-admin.module';
import { CategoryAdminModule } from './../category/category-admin.module';
import { AdminHomeComponent } from './admin-home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryAdminModule,
    ProductAdminModule,
    ContactAdminModule,
    CategoryAdminImageModule,
    ProductAdminImageModule
  ],
  
})
export class AdminHomeModule { }
