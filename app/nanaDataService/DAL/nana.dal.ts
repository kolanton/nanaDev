import {  Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


/**
 * (description)
 * 
 * @export
 * @class NanaDal
 */
export class NanaDal {

    /**
     * (description)
     * 
     * @private
     * @static
     * @type {NanaDal}
     */
    private static _instance: NanaDal;
    /**
     * (description)
     * 
     * @private
     * @type {string}
     */
    private _factoryname: string;
    /**
     * (description)
     * 
     * @private
     * @type {number}
     */
    private _itemId: number;
    /**
     * (description)
     * 
     * @private
     * @type {string}
     */
    private _dataDomain: string = 'http://localhost/Nana10MVC/';


    /**
     * (description)
     * 
     * @static
     * @returns {NanaDal} (description)
     */
    public static getInstance(): NanaDal {
        return NanaDal._instance;
    }

    /**
     * Creates an instance of NanaDal.
     * 
     * @param {Http} _http (description)
     */
    constructor( @Inject(Http) private _http: Http) {
        NanaDal._instance = this;
    }

    /**
     * (description)
     * 
     * @param {string} _factoryname (description)
     * @param {number} _itemId (description)
     */
    setFactory(_factoryname: string, _itemId: number) {
        this._factoryname = _factoryname;
        this._itemId = _itemId;
    }
    /**
     * (description)
     * 
     * @returns {Observable<any>} (description)
     */
    getItems(): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(this._http);
        return this._http.get(this._dataDomain + this._factoryname + '/' + this._itemId)
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }


    /**
     * (description)
     * 
     * @private
     * @param {Response} error (description)
     * @returns (description)
     */
    private handleError(error: Response) {
        console.log(JSON.stringify(error));
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

/**
 * (description)
 * 
 * @export
 * @class MockNanaDal
 */
export class MockNanaDal {
    /**
     * (description)
     * 
     * @returns {Observable<Object>} (description)
     */
    getItems(): Observable<Object> {
        return Observable.of({
            NavigateID: 1,
            NavigateName: 'name1'
        });
    }
}
