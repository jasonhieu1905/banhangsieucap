import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { CategoryService } from './../service/category.service';
import { ContactService } from './../service/contact.service';
import { HomeComponent } from './home.component';
import { LoginModule } from './../admin/login/login.module';
import { LoginComponent } from './../admin/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ContactService, CategoryService],
})
export class HomeModule { }
