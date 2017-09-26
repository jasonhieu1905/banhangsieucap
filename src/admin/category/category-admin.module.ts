import { CategoryAdminComponent } from './category-admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    CategoryAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  exports: [
      CategoryAdminComponent
  ]
  
})
export class CategoryAdminModule { }
