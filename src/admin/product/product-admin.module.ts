import { ProductAdminComponent } from './product-admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    ProductAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  exports: [
    ProductAdminComponent
  ]
  
})
export class ProductAdminModule { }
