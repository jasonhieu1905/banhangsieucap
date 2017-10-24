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
   
        this.getAllProductImage();
    }

    public getAllProductImage() {
        this.productService.getAllProductImages().subscribe(res => {
            this.files = res.json();
        })
    }

    public removeProductImage() {
        let arr = $('.cbx-product-image:checkbox:checked');
        let allFile = [];
        for(let item of arr) {
            allFile.push(item.getAttribute('data-file'));
        }
        this.productService.removeCategoryImage(allFile.toString()).subscribe(res => {
            alert('Delete File ok');
            this.getAllProductImage();
        });
    }

}
