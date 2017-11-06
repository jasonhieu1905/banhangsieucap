import { LoginModule } from './../admin/login/login.module';
import { AdminHomeModule } from './../admin/user/admin-home.module';
import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { ProductModule } from './../product/product.module';
import { BaseService } from './../service/base.service';
import { HomeModule } from './../home/home.module';
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
    HomeModule,
    LoginModule,
    ProductModule,
    AdminHomeModule,
    routing,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
