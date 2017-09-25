import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class BaseService {
    constructor(private http: Http) {
        
    }

    get(url) {
       return this.http.get(url);
    }

    post(url, body){
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers, method: "post"});
        return this.http.post(url, body, options);
    }

}