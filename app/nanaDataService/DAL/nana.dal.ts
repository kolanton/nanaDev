import {  Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


export class NanaDal {

    private static _instance: NanaDal;
    private _factoryname: string;
    private _itemId: number;
    private _dataDomain: string = 'http://localhost/Nana10MVC/';


    public static getInstance(): NanaDal {
        return NanaDal._instance;
    }

    constructor( @Inject(Http) private _http: Http) {
        NanaDal._instance = this;
    }

    setFactory(_factoryname: string, _itemId: number) {
        this._factoryname = _factoryname;
        this._itemId = _itemId;
    }
    getItems(): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(this._http);
        return this._http.get(this._dataDomain + this._factoryname + '/' + this._itemId)
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.log(JSON.stringify(error));
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

export class MockNanaDal {
    getItems(): Observable<Object> {
        return Observable.of({
            NavigateID: 1,
            NavigateName: 'name1'
        });
    }
}
