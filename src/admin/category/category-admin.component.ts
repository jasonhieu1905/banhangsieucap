import { CategoryService } from './../../service/category.service';
import { Component } from '@angular/core';

@Component({
    selector: 'category-admin',
    templateUrl: './category-admin.component.html',
    styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent {
    private settings: any;
    private data: any;
    constructor(private categoryService: CategoryService){
        this.categoryService.getAllCategories().subscribe(res => {
            this.data = res.json();
        });
        this.settings = {
       
            columns: {
                id: {
                    title: 'ID',
                    editable: false
                },
                name: {
                    title: 'Name'
                },
                description: {
                    title: 'Description'
                },
                image: {
                    title: 'Image'
                }
            }
        };
    }

    onEdit(event):void { 
        debugger;
    } 

}
