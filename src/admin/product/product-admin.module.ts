import { DataTableModule, DialogModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductAdminComponent } from './product-admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {OverlayPanelModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    ProductAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayPanelModule,
    GalleriaModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    SharedModule
  ],
  exports: [
    ProductAdminComponent
  ]
  
})
export class ProductAdminModule { }
