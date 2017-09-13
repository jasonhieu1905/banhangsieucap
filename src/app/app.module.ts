import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { ProductModule } from './../product/product.module';
import { BaseService } from './../service/base.service';
import { HomeModule } from './../home/home.module';
import { LoginModule } from './../admin/login/login.module';
import { LoginComponent } from './../admin/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { routing } from './app.route';

import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    HomeModule,
    ProductModule,
    routing
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
