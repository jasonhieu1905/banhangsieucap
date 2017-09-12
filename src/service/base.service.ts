import { Injectable } from '@angular/core';


import { Http} from '@angular/http';

@Injectable()
export class BaseService {
    constructor(private http: Http) {
        
    }

    get(url) {
       return this.http.get(url);
    }

}