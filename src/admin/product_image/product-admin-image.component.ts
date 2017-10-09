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
    public products: any;
    public images = [];
    constructor(private productService: ProductService) {
        this.productService.getAllProduct().subscribe(res => {
            this.products = res.json();
            for(let product of this.products) {
                let arrImage = product.children_image.split(',');
                Array.prototype.push.apply(this.images,arrImage);
            }
        });
    }

}
