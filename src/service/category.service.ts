import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class CategoryService{

    constructor(private baseService: BaseService){}

    private url_get_all = 'category-get-all.php';
    private url_update = 'category-update.php';
    private url_add = 'category-add.php';
    private url_delete = 'category-delete.php';
    private url_image = "category-get-images.php";
    private url_detele_image = "category-delete-image.php";
    private url_category_detail = "category-getById.php";

    public getAllCategoriesImage() {
        let url = ConstantUtil.URL + this.url_image;
        return this.baseService.get(url);
    }

    public  getAllCategories() {
        let url = ConstantUtil.URL + this.url_get_all;
        return this.baseService.get(url);
    }

    public updateCategory(body) {
        let url = ConstantUtil.URL + this.url_update;
        return this.baseService.post(url, body);
    }

    public addNewCategory(body) {
        let url = ConstantUtil.URL + this.url_add;
        return this.baseService.post(url, body);
    }

    public deleteCategory(body) {
        let url = ConstantUtil.URL + this.url_delete;
        return this.baseService.post(url, body);
    }

    public removeCategoryImage(images) {
        let url = ConstantUtil.URL + this.url_detele_image + "?images=" + images;
        return this.baseService.get(url);
    }

    public getCategoryById(categoryId) {
        let url = ConstantUtil.URL + this.url_category_detail + "?id=" + categoryId;
        return this.baseService.get(url);
    }
}