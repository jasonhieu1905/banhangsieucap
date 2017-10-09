import { BrowserModule } from '@angular/platform-browser';
import { CategoryAdminComponent } from './category-admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DataTableModule,SharedModule, DialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CategoryAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    SharedModule
  ],
  exports: [
      CategoryAdminComponent
  ]
  
})
export class CategoryAdminModule { }
