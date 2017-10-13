import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    create(user: User) {
        return this._http.post('http://hello-world.innocv.com/api/user/create', user)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            });
    }

    getall() {
        return this._http.get('http://hello-world.innocv.com/api/user/getall')
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return error;
            });
    }

    remove(id: number) {
        return this._http.get('http://hello-world.innocv.com/api/user/remove/' + id)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            });
    }

    get(id: number) {
        return this._http.get('http://hello-world.innocv.com/api/user/get/' + id)
            .map((response: Response) => {
                let body = response.json();  
                return body;
            })
            .catch((error: any) => {
                return error;
            });
    }

    update(userUpdate: User) {
        return this._http.post('http://hello-world.innocv.com/api/user/update', userUpdate)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            });
    }
}
