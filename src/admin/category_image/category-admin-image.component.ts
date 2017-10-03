import { ConstantUtil } from './../../util/const.util';
import { RequestUtil } from './../../util/request.util';
import { CategoryService } from './../../service/category.service';
import { Component, Directive } from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'category-admin-image',
    templateUrl: './category-admin-image.component.html',
    styleUrls: ['./category-admin-image.component.scss'],
})
export class CategoryAdminImageComponent {
    private categories: any;
    private url = ConstantUtil.URL + 'upload-category.php';
    constructor(private categoryService: CategoryService) {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res.json();
        });
    }


}
