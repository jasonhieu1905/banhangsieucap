import { ConstantUtil } from './../util/const.util';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class UserService{

    constructor(private baseService: BaseService){}

    private url_login = 'login.php';
    public  login(username, password) {
        let url = ConstantUtil.URL + this.url_login;
        let data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        return this.baseService.post(url,data.toString());
    }

}