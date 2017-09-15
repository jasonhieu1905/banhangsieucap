import { ProductService } from './../service/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
