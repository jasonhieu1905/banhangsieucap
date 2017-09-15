import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class ProductService{

    constructor(private baseService: BaseService){}

    private url_get_all = 'product-get-by-category.php?id=';
    public  getProductByCategoryId(id) {
        let url = ConstantUtil.URL + this.url_get_all + id;
        return this.baseService.get(url);
    }
}