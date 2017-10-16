import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class ProductService{

    constructor(private baseService: BaseService){}

    private url_get_by_product_id = 'product-get-by-category.php?id=';
    private url_get_all = 'product-get-all.php';
    private url_update_product = 'product-update.php';
    private url_add_product = 'product-add.php';
    private url_delete_product = 'product-delete.php';
    private url_image = "product-get-images.php";
    
    public  getProductByCategoryId(id) {
        let url = ConstantUtil.URL + this.url_get_by_product_id + id;
        return this.baseService.get(url);
    }

    public  getAllProduct() {
        let url = ConstantUtil.URL + this.url_get_all;
        return this.baseService.get(url);
    }

    public getAllProductImages() {
        let url = ConstantUtil.URL + this.url_image;
        return this.baseService.get(url);
    }

    public updateProduct(body) {
        let url = ConstantUtil.URL + this.url_update_product;
        return this.baseService.post(url, body);
    }

    public addNewProduct(body) {
        let url = ConstantUtil.URL + this.url_add_product;
        return this.baseService.post(url, body);
    }

    public deleteProduct(body) {
        let url = ConstantUtil.URL + this.url_delete_product;
        return this.baseService.post(url, body);
    }
}