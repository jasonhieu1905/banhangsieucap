import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class ContactService{

    constructor(private baseService: BaseService){}

    private url_get_all = 'contact-get-all.php';
    private url_update = 'contact-update.php';
    public  getAllContact() {
        let url = ConstantUtil.URL + this.url_get_all;
        return this.baseService.get(url);
    }

    public updateContact(body) {
        let url = ConstantUtil.URL + this.url_update;
        return this.baseService.post(url, body);
    }
}