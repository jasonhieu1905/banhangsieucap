import { ContactAdminComponent } from './contact-admin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactAdminComponent
  ]
  
})
export class ContactAdminModule { }
