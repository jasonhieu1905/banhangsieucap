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
    ContactAdminModule
  ],
  
})
export class AdminHomeModule { }
