import { RequestUtil } from './../../util/request.util';
import { CategoryService } from './../../service/category.service';
import { Component } from '@angular/core';
import $ from 'jquery';
@Component({
    selector: 'category-admin',
    templateUrl: './category-admin.component.html',
    styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent {
    private settings: any;
    private data: any;
    constructor(private categoryService: CategoryService) {
        this.categoryService.getAllCategories().subscribe(res => {
            this.data = res.json();
        });
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
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

    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            debugger;
            let params = RequestUtil.getUrlSearchParam(event.data);
            this.categoryService.deleteCategory(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    console.log('error while deleting category');
                }
            });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event) {
        let params = RequestUtil.getUrlSearchParam(event.newData);
        this.categoryService.updateCategory(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while updating category');
            }
        });
        event.confirm.resolve(event.newData);
    }

    onCreateConfirm(event) {
        let params = RequestUtil.getUrlSearchParam(event.newData);
        this.categoryService.addNewCategory(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while adding category');
            }
        });
        event.confirm.resolve(event.newData);
      
    }

}
