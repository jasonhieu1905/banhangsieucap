import { AdminHomeComponent } from './../admin/user/admin-home.component';
import { HomeComponent } from './../home/home.component';
import { ProductComponent } from './../product/product.component';
import { LoginComponent } from './../admin/login/login.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'category/:id',
    component: ProductComponent   
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent   
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
