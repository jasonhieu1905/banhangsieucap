import { ProductService } from './../../service/product.service';
import { RequestUtil } from './../../util/request.util';
import { Component } from '@angular/core';
@Component({
    selector: 'product-admin',
    templateUrl: './product-admin.component.html',
    styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
    private settings: any;
    private data: any;
    constructor(private productService: ProductService) {
        this.productService.getAllProduct().subscribe(res => {
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
                product_id: {
                    title: 'Product ID'
                },
                category_id: {
                    title: 'category_id'
                },
                name: {
                    title: 'Name'
                },
                description: {
                    title: 'Description'
                },
                size: {
                    title: 'Size'
                },
                parent_image: {
                    title: 'Main Image'
                },
                children_image: {
                    title: 'Children Images'
                },
                price: {
                    title: 'Price'
                },
                priority: {
                    title: 'Priority'
                }
            }
        };
    }

    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            debugger;
            let params = RequestUtil.getUrlSearchParam(event.data);
            this.productService.deleteProduct(params.toString()).subscribe(res => {
                if (res.json().status == 'error') {
                    console.log('error while deleting Product');
                }else {
                    event.confirm.resolve();
                }
            });
        } else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event) {
        let params = RequestUtil.getUrlSearchParam(event.newData);
        this.productService.updateProduct(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while updating Product');
            }else {
                event.confirm.resolve(event.newData);
            }
        });
        
    }

    onCreateConfirm(event) {
        let params = RequestUtil.getUrlSearchParam(event.newData);
        this.productService.addNewProduct(params.toString()).subscribe(res => {
            if (res.json().status == 'error') {
                console.log('error while adding Product');
            }else {
                event.confirm.resolve(event.newData);
            }
        });
    }

}
