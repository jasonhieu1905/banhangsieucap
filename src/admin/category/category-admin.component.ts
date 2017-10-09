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
    public data: any;
    public selectedCategory: any;
    public isNewCategory: boolean;
    public category:any;
    displayDialog: boolean;
    constructor(private categoryService: CategoryService) {
        this.getAllCategory();
    }

    private getAllCategory() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.data = res.json();
        });
    }

    showDialogToAdd() {
        this.isNewCategory = true;
        this.category = new Category();
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.isNewCategory = false;
        this.category = this.cloneCategory(event.data);
        this.displayDialog = true;
    }

    cloneCategory(c: Category): Category {
        let car = new Category();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.data = this.data.filter((val, i) => i != index);
        this.category = null;
        this.displayDialog = false;
        let params = RequestUtil.getUrlSearchParam(this.selectedCategory);
        this.categoryService.deleteCategory(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while deleting category');
            }
        });

    }

    save(){
        let data = [...this.data];
        if(this.isNewCategory){
            data.push(this.category);
            let params = RequestUtil.getUrlSearchParam(this.category);
            this.categoryService.addNewCategory(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    alert('error while adding category');
                }
            });
        }
        else{
            data[this.findSelectedCarIndex()] = this.category;
            let params = RequestUtil.getUrlSearchParam(this.category);
            this.categoryService.updateCategory(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    alert('error while updating category');
                }
            });
        }
        this.data = data;
        this.category = null;
        this.displayDialog = false;
    }
    
    findSelectedCarIndex(): number {
        return this.data.indexOf(this.selectedCategory);
    }

}

class Category{
    constructor(public id?, public name?, public description?, public image?) {}
}
