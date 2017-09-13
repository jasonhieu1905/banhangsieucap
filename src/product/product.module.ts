import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class ProductModule { }
