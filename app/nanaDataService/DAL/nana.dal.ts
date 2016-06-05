import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NanaDal {

    private static _instance: NanaDal = new NanaDal(null);
    private _factoryname: string;
    private _itemId: number;
    private _dataDomain: string = 'http://localhost/Nana10MVC/';


    public static getInstance(): NanaDal {
        return NanaDal._instance;
    }

    constructor(private _http: Http) {
        NanaDal._instance = this;
    }



    setFactory(_factoryname: string, _itemId: number) {
        this._factoryname = _factoryname;
        this._itemId = _itemId;
    }
    getItems() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.get(this._dataDomain + this._factoryname + '/' + this._itemId)
            .map((response: Response) => {
                let navigations = response.json();
                return navigations;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
