import { ConstantUtil } from './../../util/const.util';
import { ProductService } from './../../service/product.service';
import { RequestUtil } from './../../util/request.util';
import { Component } from '@angular/core';
import $ from 'jquery';
@Component({
    selector: 'product-admin-image',
    templateUrl: './product-admin-image.component.html',
    styleUrls: ['./product-admin-image.component.scss']
})
export class ProductAdminImageComponent {
    public product: any;
    public files;
    public url = ConstantUtil.URL + 'upload-product.php';
    constructor(private productService: ProductService) {
   
        this.productService.getAllProductImages().subscribe(res => {
            this.files = res.json();
        })
    }

}
