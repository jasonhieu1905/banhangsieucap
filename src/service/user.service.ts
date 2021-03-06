import { RequestUtil } from './../util/request.util';
import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class UserService{

    constructor(private baseService: BaseService){}

    private url_login = 'login.php';
    private url_update_password = 'update-password.php';
    public  login(username, password) {
        let url = ConstantUtil.URL + this.url_login;
        let data = RequestUtil.getUrlSearchParam({username, password});
        return this.baseService.post(url,data.toString());
    }

    public updatePassword(username, password) {
        let url = ConstantUtil.URL + this.url_update_password;
        let data = RequestUtil.getUrlSearchParam({username, password});
        return this.baseService.post(url,data.toString());
    }

}