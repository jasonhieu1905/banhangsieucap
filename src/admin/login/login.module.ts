import { Routes, RouterModule } from '@angular/router';
import { UserService } from './../../service/user.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//   { path: '', component: LoginComponent }
// ];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ]
})
export class LoginModule { }
