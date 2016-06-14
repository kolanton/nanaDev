import { NanaDal } from '../DAL/dal.service';
import {Navigation} from '../Navigation/Models/navigation';
import { OnInit, Inject } from '@angular/core';
/**
 * (description)
 * 
 * @export
 * @class NanaserviceService
 * @implements {OnInit}
 */
export class NanaserviceService implements OnInit {

    /**
     * (description)
     * 
     * @type {string}
     */
    errorMessage: string;
    /**
     * (description)
     * 
     * @type {Navigation}
     */
    navigations: Navigation;

    /**
     * Creates an instance of NanaserviceService.
     * 
     * @param {NanaDal} _dal (description)
     */
    constructor( @Inject(NanaDal) private _dal: NanaDal) {
    }

    /**
     * (description)
     */
    ngOnInit() {
        {
            console.log('NanaserviceService init');
            this.getServices();
        }
    }

    /**
     * (description)
     */
    getServices() {
        // this._dal.serviceSrc = 'service';
        console.log('getServices');
        this._dal.getItems()
            .subscribe(
            data => this.navigations = new Navigation(data),
            error => this.errorMessage = <any>error);

    }
}