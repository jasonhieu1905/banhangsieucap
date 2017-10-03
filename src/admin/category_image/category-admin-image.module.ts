import { UploaderModule } from './../uploader/uploader.module';
import { CategoryAdminImageComponent } from './category-admin-image.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    CategoryAdminImageComponent
  ],
  imports: [
    CommonModule,
    UploaderModule
  ],
  exports: [
      CategoryAdminImageComponent
  ]
  
})
export class CategoryAdminImageModule { }
