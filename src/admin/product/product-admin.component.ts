import { element } from 'protractor';
import { ConstantUtil } from './../../util/const.util';
import { ProductService } from './../../service/product.service';
import { RequestUtil } from './../../util/request.util';
import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'product-admin',
    templateUrl: './product-admin.component.html',
    styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
    public data: any;
    public selectedProduct: any;
    public isNewProduct: boolean;
    public product:any;
    public displayDialog: boolean;

    public url = ConstantUtil.URL + 'upload-product-image.php';

    constructor(private productService: ProductService) {
        this.getAllProduct();
    }

    getAllProduct() {
        this.productService.getAllProduct().subscribe(res => {
            this.data = res.json();
        });
    }

    showDialogToAdd() {
        this.isNewProduct = true;
        this.product = new Product();
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.isNewProduct = false;
        this.product = this.cloneCategory(event.data);
        this.displayDialog = true;
    }

    cloneCategory(c: Product): Product {
        let pro = new Product();
        for(let prop in c) {
            pro[prop] = c[prop];
        }
        return pro;
    }

    delete() {
        let index = this.findSelectedProductIndex();
        this.data = this.data.filter((val, i) => i != index);
        this.product = null;
        this.displayDialog = false;
        let params = RequestUtil.getUrlSearchParam(this.selectedProduct);
        this.productService.deleteProduct(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while deleting category'+ res.json());
            }
        });

    }

    save(){
        let data = [...this.data];
        if(this.isNewProduct){
            data.push(this.product);
            let params = RequestUtil.getUrlSearchParam(this.product);
            this.productService.addNewProduct(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    alert('error while adding category'+ res.json());
                }
                this.getAllProduct();
                return ;
            });
        }
        else{
            data[this.findSelectedProductIndex()] = this.product;
            let params = RequestUtil.getUrlSearchParam(this.product);
            this.productService.updateProduct(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    alert('error while updating category'+ res.json());
                    return ;
                }
            });
        }
        this.data = data;
        this.product = null;
        this.displayDialog = false;
    }

    copy() {
        let data = [...this.data];
        data[this.findSelectedProductIndex()] = this.product;
        let params = RequestUtil.getUrlSearchParam(this.product);
        this.productService.addNewProduct(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                alert('error while adding category'+ res.json());
            }
            this.getAllProduct();
        });
        this.product = null;
        this.displayDialog = false;
    }

    findSelectedProductIndex(): number {
        return this.data.indexOf(this.selectedProduct);
    }

    public submitFileParentImage(form) {
        let formData = new FormData(form);
        let files = form.elements[0].files;
        let fileName = files[0].name;
      
        let t = this;
        $.ajax({
            url: this.url,
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                debugger;
                t.product.parent_image = fileName;
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }

    public submitFileChildrenImage(form) {
        let formData = new FormData(form);
        let files = form.elements[0].files;
        let filesImage = [];
        if(files) {
            for (let file of files) {
                filesImage.push(file.name);
            }
        }
        
        let t = this;
        $.ajax({
            url: this.url,
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                debugger;
                t.product.children_image = filesImage.toString();
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }
}


class Product{
    constructor(public id?, public product_id: string="", public name: string="", public description: string="",
        public size: string="",public parent_image: string="",public children_image: string="", public price: string="", public priority: string="") {}
}